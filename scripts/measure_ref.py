from PIL import Image
import numpy as np

ref = Image.open('reports/reference-1440.png').convert('RGB')
desk = Image.open('reports/desktop-1440.png').convert('RGB')

arr_ref = np.array(ref, dtype=np.int32)
arr_desk = np.array(desk, dtype=np.int32)

# Check row non-cream fraction:
# For each row y, how many pixels in columns [250, 1190] are significantly different from cream (247, 245, 240)?
ref_row_content = np.mean(np.max(np.abs(arr_ref[:, 250:1190] - [247, 245, 240]), axis=2) > 20, axis=1)
desk_row_content = np.mean(np.max(np.abs(arr_desk[:, 250:1190] - [247, 245, 240]), axis=2) > 20, axis=1)

def find_blocks(row_content, thresh=0.08, min_gap=15):
    active = row_content > thresh
    blocks = []
    in_block = False
    start = 0
    for y, a in enumerate(active):
        if a and not in_block:
            in_block = True
            start = y
        elif not a and in_block:
            # check if gap is short or real
            if np.sum(active[y:y+min_gap]) == 0:
                in_block = False
                blocks.append((start, y, y - start))
    if in_block:
        blocks.append((start, len(active), len(active) - start))
    return blocks

print("Ref content blocks:")
for b in find_blocks(ref_row_content):
    print(f"  y={b[0]}..{b[1]}, height={b[2]}")

print("\nDesk content blocks:")
for b in find_blocks(desk_row_content):
    print(f"  y={b[0]}..{b[1]}, height={b[2]}")
