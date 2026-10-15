import shutil
import os

src_dir = "reports"
dst_dir = r"C:\Users\maury\.gemini\antigravity-ide\brain\115a70d5-c745-4096-bce2-b38af5a6bdd6"

files_to_copy = [
    "comparison-side-by-side.png",
    "overlay-50.png",
    "diff-map.png",
    "desktop-1440.png",
    "tablet-768.png",
    "mobile-390.png"
]

for f in files_to_copy:
    s = os.path.join(src_dir, f)
    d = os.path.join(dst_dir, f)
    if os.path.exists(s):
        shutil.copy2(s, d)
        print(f"Copied {f} to {d}")
    else:
        print(f"File not found: {s}")
