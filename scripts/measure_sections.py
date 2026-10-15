import sys
from PIL import Image

ref = Image.open('reference/design.png')
ref_scaled = ref.resize((1440, int(1344 * 1440 / 768)), Image.Resampling.LANCZOS)
print("Reference scaled size:", ref_scaled.size) # (1440, 2520)

desk = Image.open('reports/desktop-1440.png')
print("Desktop size:", desk.size) # (1440, 2854)
print("Height difference:", desk.size[1] - ref_scaled.size[1])
