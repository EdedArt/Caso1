from PIL import Image
import numpy as np

ref = Image.open('reports/reference-1440.png').convert('RGB')
arr = np.array(ref)

# Let's inspect:
# 1. Header:
# In ref, logo stamp center is at x=720. Where is the top and bottom of the black stamp?
logo_mask = (arr[:150, 720, 0] < 50) & (arr[:150, 720, 1] < 50) & (arr[:150, 720, 2] < 50)
logo_ys = np.where(logo_mask)[0]
print(f"Ref Header Logo: y={logo_ys[0]}..{logo_ys[-1]}, height={logo_ys[-1] - logo_ys[0]}")

# 2. Hero:
# Hero image left bound, right bound, top, bottom:
# Look along y=300 (inside hero):
hero_row = arr[300, :, :]
# Find non-cream pixels:
non_cream_x = np.where(np.abs(hero_row[:, 0] - 247) > 15)[0]
print(f"Ref Hero X-bounds: x={non_cream_x[0]}..{non_cream_x[-1]}, width={non_cream_x[-1] - non_cream_x[0]}")

# Find Hero top and bottom along x=non_cream_x[100]:
x_probe = non_cream_x[100]
non_cream_y = np.where(np.abs(arr[:, x_probe, 0] - 247) > 15)[0]
hero_ys = [y for y in non_cream_y if y < 600]
print(f"Ref Hero Y-bounds: y={hero_ys[0]}..{hero_ys[-1]}, height={hero_ys[-1] - hero_ys[0]}")

# 3. Our Menu:
# Where is the title "OUR MENU"?
# Along x=200..300, y=550..650
# Let's find menu card 1 bounds (x ~ 200..450, y ~ 620..850)
menu_card_mask = np.abs(arr[600:900, 300, 0] - 247) > 10
card_ys = np.where(menu_card_mask)[0] + 600
print(f"Ref Menu Card 1: y={card_ys[0]}..{card_ys[-1]}, height={card_ys[-1] - card_ys[0]}")

# Menu button:
btn_mask = (arr[850:960, 720, 0] > 200) & (arr[850:960, 720, 1] > 100) & (arr[850:960, 720, 2] < 80)
btn_ys = np.where(btn_mask)[0] + 850
print(f"Ref Menu Button: y={btn_ys[0]}..{btn_ys[-1]}, height={btn_ys[-1] - btn_ys[0]}")

# Menu divider line:
# Look for line between y=920 and 990:
for y in range(920, 990):
    diff = np.abs(arr[y, 400:1040, :].astype(int) - [247, 245, 240])
    if np.mean(diff) > 4 and np.mean(diff) < 20:
        print(f"Ref Menu divider line at y={y}")

# 4. Chicago Style:
# Chicago style heading "HOME OF THE CHICAGO-STYLE"
# Polaroid bounds (around x=1000..1250, y=1000..1300)
# Feature icons bounds (around x=650..850, y=1000..1300)

# 5. Ways to Enjoy:
# "WAYS TO ENJOY" heading around y=1340..1390
# Pepperoni Pizza bounds (x around 200..680, y around 1380..1900)
pep_mask = np.abs(arr[1350:1950, 400, 0] - 247) > 15
pep_ys = np.where(pep_mask)[0] + 1350
print(f"Ref Pepperoni Pizza: y={pep_ys[0]}..{pep_ys[-1]}, height={pep_ys[-1] - pep_ys[0]}")

# Dark cards bounds (x around 750..1200, y around 1380..1650)
dark_card_mask = (arr[1350:1750, 850, 0] < 50) & (arr[1350:1750, 850, 1] < 50)
dark_ys = np.where(dark_card_mask)[0] + 1350
print(f"Ref Dark Card 1: y={dark_ys[0]}..{dark_ys[-1]}, height={dark_ys[-1] - dark_ys[0]}")

# Why Choose Us card bounds (x around 750..1200, y around 1650..2050)
why_mask = np.abs(arr[1650:2050, 850, 0] - 247) > 10
why_ys = np.where(why_mask)[0] + 1650
print(f"Ref Why Choose Us: y={why_ys[0]}..{why_ys[-1]}, height={why_ys[-1] - why_ys[0]}")

# Community subsection in Ref:
# Look around x=350, y=1880..2150
comm_mask = np.abs(arr[1880:2160, 500, 0] - 247) > 15
comm_ys = np.where(comm_mask)[0] + 1880
print(f"Ref Community illustration: y={comm_ys[0]}..{comm_ys[-1]}, height={comm_ys[-1] - comm_ys[0]}")

# 6. Franchise section:
# Franchise Storefront (x around 550..950, y around 2180..2420)
store_mask = np.abs(arr[2160:2440, 720, 0] - 247) > 15
store_ys = np.where(store_mask)[0] + 2160
print(f"Ref Storefront: y={store_ys[0]}..{store_ys[-1]}, height={store_ys[-1] - store_ys[0]}")

# 7. Footer:
# Footer logo (x around 250..300, y around 2440..2510)
footer_mask = (arr[2430:2520, 240, 0] < 50)
footer_ys = np.where(footer_mask)[0] + 2430
if len(footer_ys) > 0:
    print(f"Ref Footer Logo: y={footer_ys[0]}..{footer_ys[-1]}")
