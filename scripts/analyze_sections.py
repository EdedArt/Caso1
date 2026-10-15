from PIL import Image
import numpy as np

ref = Image.open('reports/reference-1440.png').convert('RGB')
desk = Image.open('reports/desktop-1440.png').convert('RGB')

arr_ref = np.array(ref)
arr_desk = np.array(desk)

print("Ref shape:", arr_ref.shape)
print("Desk shape:", arr_desk.shape)

# Let's inspect rows around:
# 1. Hero start
# Header height:
# In ref, where does hero image start?
# In column x=720 (center), look for top and bottom of hero:
# Cream bg is ~ (247, 245, 240)
def find_non_cream_ranges(arr, x_range=(500, 940)):
    is_not_cream = np.any(np.abs(arr[:, x_range[0]:x_range[1], :3] - [247, 245, 240]) > 20, axis=(1, 2))
    return is_not_cream

# Let's check sections in ref:
# Let's sample specific landmark features:
# Hero in ref:
# Let's find header logo in ref:
# The black circular stamp around x=720:
dark_ref = (arr_ref[:, 720, 0] < 50) & (arr_ref[:, 720, 1] < 50) & (arr_ref[:, 720, 2] < 50)
dark_desk = (arr_desk[:, 720, 0] < 50) & (arr_desk[:, 720, 1] < 50) & (arr_desk[:, 720, 2] < 50)

# Print some landmark Y coordinates
# Let's search for the orange color in both:
# Brand orange is approx [242, 138, 48]
def find_orange_rows(arr):
    # R > 200, G in 100..160, B < 80
    mask = (arr[:, :, 0] > 200) & (arr[:, :, 1] > 100) & (arr[:, :, 1] < 170) & (arr[:, :, 2] < 80)
    row_counts = np.sum(mask, axis=1)
    return row_counts

orange_ref = find_orange_rows(arr_ref)
orange_desk = find_orange_rows(arr_desk)

print("Ref orange peaks:")
for y in range(0, arr_ref.shape[0], 50):
    count = np.sum(orange_ref[y:y+50])
    if count > 200:
        print(f"  Ref y={y}..{y+50}: orange pixels = {count}")

print("\nDesk orange peaks:")
for y in range(0, arr_desk.shape[0], 50):
    count = np.sum(orange_desk[y:y+50])
    if count > 200:
        print(f"  Desk y={y}..{y+50}: orange pixels = {count}")
