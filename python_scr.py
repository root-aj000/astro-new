import os
import re

# Regex to match path-like strings inside files (Unix/Windows style)
PATH_PATTERN = re.compile(r'((?:\.?/)?(?:[a-zA-Z0-9_\-/\\]+(?:\.[a-zA-Z0-9]+)?)+)')

# Output filename
OUTPUT_FILE = "local_paths_and_tree.txt"

# Start directory: current working directory or define your own path
START_PATH = os.getcwd()  # Or: START_PATH = r"D:\Projects\MyRepo"

def extract_paths_from_file(filepath):
    """Extracts local path-like strings from a file."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        return PATH_PATTERN.findall(content)
    except Exception:
        return []

def normalize_path(path, root):
    """Normalize to a root-relative path."""
    path = os.path.normpath(path)
    if os.path.isabs(path):
        return os.path.relpath(path, root)
    return os.path.normpath(path)

def get_all_local_paths(start_path):
    """Walk through all files and extract all path-like strings."""
    all_paths = set()
    for dirpath, _, filenames in os.walk(start_path):
        for filename in filenames:
            full_path = os.path.join(dirpath, filename)
            local_paths = extract_paths_from_file(full_path)
            for p in local_paths:
                normalized = normalize_path(p, start_path)
                if not normalized.startswith('..') and os.sep in normalized:
                    all_paths.add(normalized)
    return sorted(all_paths)

def insert_into_tree(tree, parts):
    """Recursively insert path parts into a tree structure."""
    if not parts:
        return
    head, *tail = parts
    if head not in tree:
        tree[head] = {}
    insert_into_tree(tree[head], tail)

def build_path_tree(paths):
    """Builds a tree structure from a list of paths."""
    tree = {}
    for path in paths:
        parts = path.strip(os.sep).split(os.sep)
        insert_into_tree(tree, parts)
    return tree

def print_tree(tree, prefix=""):
    """Recursively print the path tree."""
    lines = []
    keys = sorted(tree.keys())
    for i, key in enumerate(keys):
        connector = "└── " if i == len(keys) - 1 else "├── "
        lines.append(f"{prefix}{connector}{key}")
        sub_tree = print_tree(tree[key], prefix + ("    " if i == len(keys) - 1 else "│   "))
        lines.extend(sub_tree)
    return lines

def main():
    print(f"🔍 Scanning directory: {START_PATH}")
    paths = get_all_local_paths(START_PATH)
    tree = build_path_tree(paths)
    tree_lines = print_tree(tree)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        for p in paths:
            f.write(p + '\n')
        f.write("\nPath Tree:\n")
        f.writelines('\n'.join(tree_lines))

    print(f"✅ Output saved to {os.path.abspath(OUTPUT_FILE)}")

if __name__ == "__main__":
    main()