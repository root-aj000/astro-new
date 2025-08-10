import os

# === CONFIGURATION ===
INPUT_DIRECTORY = r"L:\ASTRO"  
OUTPUT_FILE = "local_paths_and_tree.txt"  
EXCLUDED_DIRS = {"node_modules", ".git", "__pycache__", "dist", "build", ".astro",".qodo", ".vscode", "Z_STRUCTURE && PY"} 

def get_all_file_paths(root):
    file_paths = []
    for dirpath, dirnames, filenames in os.walk(root):
        # Filter out unwanted directories
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]

        for filename in filenames:
            full_path = os.path.join(dirpath, filename)
            rel_path = os.path.relpath(full_path, root)
            file_paths.append(rel_path.replace("\\", "/"))  # Normalize to Unix-style
    return sorted(file_paths)

def insert_into_tree(tree, parts):
    if not parts:
        return
    head, *tail = parts
    if head not in tree:
        tree[head] = {}
    insert_into_tree(tree[head], tail)

def build_tree(paths):
    tree = {}
    for path in paths:
        parts = path.strip("/").split("/")
        insert_into_tree(tree, parts)
    return tree

def print_tree(tree, prefix=""):
    lines = []
    keys = sorted(tree.keys())
    for i, key in enumerate(keys):
        connector = "└── " if i == len(keys) - 1 else "├── "
        lines.append(f"{prefix}{connector}{key}")
        sub_tree = print_tree(tree[key], prefix + ("    " if i == len(keys) - 1 else "│   "))
        lines.extend(sub_tree)
    return lines

def main():
    abs_input = os.path.abspath(INPUT_DIRECTORY)
    abs_output = os.path.abspath(OUTPUT_FILE)

    print(f"🔍 Scanning directory: {abs_input}")
    paths = get_all_file_paths(abs_input)
    tree = build_tree(paths)
    tree_lines = print_tree(tree)

    with open(abs_output, 'w', encoding='utf-8') as f:
        for path in paths:
            f.write(path + '\n')
        f.write("\nPath Tree:\n")
        f.write('\n'.join(tree_lines))

    print(f"            Output saved to: {abs_output}")

if __name__ == "__main__":
    main()
