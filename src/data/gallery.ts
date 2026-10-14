export interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gallery-1",
    image: "/images/gallery-1.jpg",
    alt: "Fresh hot slice of pepperoni pizza being pulled with melted cheese",
  },
  {
    id: "gallery-2",
    image: "/images/gallery-2.jpg",
    alt: "Piping hot pasta bowl served fresh at Crust Pizza Co.",
  },
  {
    id: "gallery-3",
    image: "/images/gallery-3.jpg",
    alt: "Smiling Crust Pizza Co. team members and guests having fun",
  },
  {
    id: "gallery-4",
    image: "/images/gallery-4.jpg",
    alt: "Whole crispy Chicago-style tavern thin crust pizza cut in party squares",
  },
  {
    id: "gallery-5",
    image: "/images/gallery-5.jpg",
    alt: "Slice of pizza served in takeout packaging ready for delivery",
  },
  {
    id: "gallery-6",
    image: "/images/gallery-6.jpg",
    alt: "Hands holding a custom Crust Pizza box",
  },
];
