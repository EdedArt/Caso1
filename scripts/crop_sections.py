from PIL import Image
import numpy as np

ref = Image.open('reports/reference-1440.png')
w, h = ref.size

# Let's save crops of reference sections to understand their exact layout
# 1. Header + Hero (y=0 to 600)
ref.crop((0, 0, 1440, 600)).save('reports/crop-ref-header-hero.png')

# 2. Our Menu (y=570 to 1000)
ref.crop((0, 570, 1440, 1000)).save('reports/crop-ref-menu.png')

# 3. Chicago Style (y=980 to 1350)
ref.crop((0, 980, 1440, 1350)).save('reports/crop-ref-chicago.png')

# 4. Ways to Enjoy & Community (y=1330 to 2180)
ref.crop((0, 1330, 1440, 2180)).save('reports/crop-ref-waystoenjoy.png')

# 5. Franchise + Footer (y=2150 to 2520)
ref.crop((0, 2150, 1440, 2520)).save('reports/crop-ref-franchise-footer.png')

print("Saved section crops of reference successfully!")
