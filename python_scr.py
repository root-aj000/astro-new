import os
import re

# Regex to find path-like patterns (e.g., ./src/file.py or /lib/util.py or just src/file.py)
PATH_PATTERN = re.compile(r'((?:\.?/)?(?:[a-zA-Z0-9_\-/]+(?:\.[a-zA-Z0-9]+)?)+)')

OUTPUT_FILE = "local_paths_and_tree.txt"

def extract_paths_from_file(filepath):
    """Extracts path-like strings from a file."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        return PATH_PATTERN.findall(content)
    except Exception:
        return []

def normalize_path(path, root):
    """Converts local or relative paths to a consistent root-relative path."""
    path = os.path.normpath(path)
    if os.path.isabs(path):
        return os.path.relpath(path, root)
    return path

def get_all_local_paths(start_path):
    """Scans all files and extracts local paths."""
    all_paths = set()
    for dirpath, _, filenames in os.walk(start_path):
        for filename in filenames:
            full_path = os.path.join(dirpath, filename)
            local_paths = extract_paths_from_file(full_path)
            for p in local_paths:
                normalized = normalize_path(p, start_path)
                if not normalized.startswith('..'):  # skip external paths
                    all_paths.add(normalized)
    return sorted(all_paths)

def insert_into_tree(tree, parts):
    """Recursive insertion of path parts into a nested dictionary."""
    if not parts:
        return
    head, *tail = parts
    if head not in tree:
        tree[head] = {}
    insert_into_tree(tree[head], tail)

def build_path_tree(paths):
    """Build a tree structure from all collected paths."""
    tree = {}
    for path in paths:
        parts = path.strip(os.sep).split(os.sep)
        insert_into_tree(tree, parts)
    return tree

def print_tree(tree, prefix=""):
    """Pretty print the path tree."""
    lines = []
    keys = sorted(tree.keys())
    for i, key in enumerate(keys):
        connector = "└── " if i == len(keys) - 1 else "├── "
        lines.append(f"{prefix}{connector}{key}")
        sub_tree = print_tree(tree[key], prefix + ("    " if i == len(keys) - 1 else "│   "))
        lines.extend(sub_tree)
    return lines

def main():
    root = input("Enter the root directory path: ").strip()
    if not os.path.isdir(root):
        print("Invalid root directory.")
        return

    paths = get_all_local_paths(root)
    tree = build_path_tree(paths)
    tree_lines = print_tree(tree)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        for p in paths:
            f.write(p + '\n')
        f.write("\nPath Tree:\n")
        f.writelines('\n'.join(tree_lines))

    print(f"Local paths and path tree saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()