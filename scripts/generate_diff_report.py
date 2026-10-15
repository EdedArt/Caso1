import os
from PIL import Image, ImageChops
import numpy as np

REPORTS_DIR = "reports"
REF_PATH = os.path.join(REPORTS_DIR, "reference-1440.png")
DESK_PATH = os.path.join(REPORTS_DIR, "desktop-1440.png")

if not os.path.exists(REF_PATH):
    ref_orig = Image.open(os.path.join("reference", "design.png"))
    ref_scaled = ref_orig.resize((1440, 2520), Image.Resampling.LANCZOS)
    ref_scaled.save(REF_PATH)

ref = Image.open(REF_PATH).convert("RGBA")
desk = Image.open(DESK_PATH).convert("RGBA")

print(f"Reference dimensions: {ref.size}")
print(f"Desktop capture dimensions: {desk.size}")

# Match height for comparison
target_w = 1440
target_h = max(ref.size[1], desk.size[1])

# Create canvas for both with cream background
cream_bg = (247, 245, 240, 255)
ref_canvas = Image.new("RGBA", (target_w, target_h), cream_bg)
ref_canvas.paste(ref, (0, 0))

desk_canvas = Image.new("RGBA", (target_w, target_h), cream_bg)
desk_canvas.paste(desk, (0, 0))

# 1. Side-by-Side Comparison
side_by_side = Image.new("RGBA", (target_w * 2, target_h), cream_bg)
side_by_side.paste(ref_canvas, (0, 0))
side_by_side.paste(desk_canvas, (target_w, 0))
sbs_path = os.path.join(REPORTS_DIR, "comparison-side-by-side.png")
side_by_side.save(sbs_path)
print(f"Saved side-by-side comparison to {sbs_path}")

# 2. 50% Opacity Overlay
overlay = Image.blend(ref_canvas, desk_canvas, alpha=0.5)
overlay_path = os.path.join(REPORTS_DIR, "overlay-50.png")
overlay.save(overlay_path)
print(f"Saved 50% overlay to {overlay_path}")

# 3. Diff Map & Pixel Discrepancy
arr_ref = np.array(ref_canvas.convert("RGB"), dtype=np.int16)
arr_desk = np.array(desk_canvas.convert("RGB"), dtype=np.int16)

diff_arr = np.abs(arr_ref - arr_desk)
# Euclidean or max channel difference
channel_diff = np.max(diff_arr, axis=2)

# Threshold for perceivable pixel difference (e.g. delta > 28)
THRESHOLD = 28
mismatch_mask = channel_diff > THRESHOLD

total_pixels = target_w * target_h
mismatched_pixels = int(np.sum(mismatch_mask))
similarity_pct = ((total_pixels - mismatched_pixels) / total_pixels) * 100
discrepancy_pct = 100.0 - similarity_pct

print(f"Total Pixels: {total_pixels:,}")
print(f"Mismatched Pixels: {mismatched_pixels:,}")
print(f"Visual Similarity: {similarity_pct:.2f}%")
print(f"Pixel Discrepancy: {discrepancy_pct:.2f}%")

# Create Diff Map Image (Mismatches highlighted in bright magenta / red)
diff_vis = np.zeros((target_h, target_w, 3), dtype=np.uint8)
# Background is dim version of desk
diff_vis[:] = (arr_desk // 2).astype(np.uint8)
diff_vis[mismatch_mask] = [255, 30, 80] # High contrast crimson highlight

diff_map = Image.fromarray(diff_vis)
diff_path = os.path.join(REPORTS_DIR, "diff-map.png")
diff_map.save(diff_path)
print(f"Saved diff map to {diff_path}")

# Update DIFF_REPORT.md
diff_report_content = f"""# VISUAL DIFF REPORT — Crust Pizza Co. Clone

- **Reference Image**: `reference/design.png` (768x1344 px, scaled 1.875x to 1440x2520 px)
- **Target Resolution**: Desktop 1440px
- **Compared Dimensions**: 1440 × {target_h} px
- **Visual Similarity**: {similarity_pct:.2f}%
- **Pixel Discrepancy**: {discrepancy_pct:.2f}% (Threshold: delta > {THRESHOLD})

## Generated Artifacts in /reports/
1. `reports/desktop-1440.png` — Full page capture at 1440px desktop
2. `reports/desktop-1280.png` — Full page capture at 1280px desktop
3. `reports/tablet-1024.png` — Full page capture at 1024px tablet landscape
4. `reports/tablet-768.png` — Full page capture at 768px tablet portrait
5. `reports/mobile-390.png` — Full page capture at 390px mobile
6. `reports/mobile-360.png` — Full page capture at 360px compact mobile
7. `reports/comparison-side-by-side.png` — Side-by-side view (Reference vs Implementation)
8. `reports/overlay-50.png` — 50% opacity alignment overlay
9. `reports/diff-map.png` — Visual difference heatmap
"""

with open(os.path.join(REPORTS_DIR, "DIFF_REPORT.md"), "w", encoding="utf-8") as f:
    f.write(diff_report_content)

print("Updated DIFF_REPORT.md successfully!")
