export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "chicken-parm",
    title: "CHICKEN PARM",
    description: "Crispy hand-breaded chicken baked with marinara, fresh mozzarella & basil over pasta.",
    price: "$14.99",
    image: "/images/menu-chicken-parm.jpg",
    alt: "Oven-baked Chicken Parmesan served hot with melted cheese and fresh herbs",
  },
  {
    id: "chicken-alfredo",
    title: "CHICKEN ALFREDO",
    description: "Tender grilled chicken tossed in rich scratch-made garlic parmesan cream sauce.",
    price: "$15.49",
    image: "/images/menu-chicken-alfredo.jpg",
    alt: "Creamy Chicken Alfredo pasta topped with shaved parmesan and parsley",
  },
  {
    id: "spaghetti-meatballs",
    title: "SPAGHETTI & MEATBALLS",
    description: "Housemade Italian meatballs over pasta smothered in slow-simmered tomato sauce.",
    price: "$13.99",
    image: "/images/menu-spaghetti-meatballs.jpg",
    alt: "Plate of spaghetti and savory meatballs in rich red sauce",
  },
  {
    id: "baked-mac-cheese",
    title: "BAKED MAC & CHEESE",
    description: "Cavatappi pasta in creamy four-cheese sauce topped with toasted seasoned breadcrumbs.",
    price: "$12.99",
    image: "/images/menu-baked-mac.jpg",
    alt: "Skillet of golden baked macaroni and cheese with toasted crust",
  },
];
