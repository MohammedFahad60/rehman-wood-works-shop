export type ProductCategory = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  priceInr: number;
  categoryId: string;
  image: string;
  description: string;
  material: string;
  finish: string;
  leadTime: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "beds",
    name: "Beds",
    image: "/Images/Products/Pallet-bed.jpg",
    description: "Minimal and sturdy pallet beds for modern homes.",
  },
  {
    id: "sofas",
    name: "Sofas",
    image: "/Images/Products/Pallet-sofa.jpg",
    description: "Comfortable pallet sofas for living rooms and lounges.",
  },
  {
    id: "tables",
    name: "Tables",
    image: "/Images/Products/Pallet-table.jpg",
    description: "Center, study, and utility tables with durable wood finish.",
  },
  {
    id: "living-room",
    name: "Living Room",
    image: "/Images/Products/Pallet-furniture.jpg",
    description: "TV units and statement furniture for complete living spaces.",
  },
  {
    id: "outdoor",
    name: "Outdoor",
    image: "/Images/Products/Pallet-outdoor.jpg",
    description: "Weather-friendly pallet furniture for balconies and gardens.",
  },
  {
    id: "planters",
    name: "Pallet Planters",
    image: "/Images/Products/Pallet-planter.jpg",
    description: "Functional planter designs crafted from reclaimed wood.",
  },
];

export const products: Product[] = [
  {
    id: "standard-pallet-bed",
    name: "Standard Pallet Bed",
    priceInr: 4999,
    categoryId: "beds",
    image: "/Images/Products/standard-pallet-bed.jpg",
    description:
      "A strong and clean-lined pallet bed that fits modern and compact bedrooms.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "3-7 working days",
  },
  {
    id: "single-bed-frame",
    name: "Single Pallet Bed Frame",
    priceInr: 3999,
    categoryId: "beds",
    image: "/Images/Products/single-bed-frame.jpg",
    description:
      "Space-saving bed frame with dependable structural support for daily use.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "3-7 working days",
  },
  {
    id: "classic-pallet-sofa",
    name: "Classic Pallet Sofa",
    priceInr: 7499,
    categoryId: "sofas",
    image: "/Images/Products/classic-pallet-sofa.jpg",
    description:
      "Comfort-oriented pallet sofa frame ideal for family seating setups.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "5-9 working days",
  },
  {
    id: "corner-sofa-set",
    name: "Corner Pallet Sofa Set",
    priceInr: 12999,
    categoryId: "sofas",
    image: "/Images/Products/corner-sofa-set.jpg",
    description:
      "L-shaped pallet seating set designed for larger living areas.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "7-12 working days",
  },
  {
    id: "center-table",
    name: "Reclaimed Wood Center Table",
    priceInr: 2999,
    categoryId: "tables",
    image: "/Images/Products/center-table.jpg",
    description:
      "Compact and practical center table with reclaimed wood character.",
    material: "Reclaimed Pinewood",
    finish: "Natural",
    leadTime: "3-7 working days",
  },
  {
    id: "study-table",
    name: "Pallet Study Table",
    priceInr: 4599,
    categoryId: "tables",
    image: "/Images/Products/study-table.jpg",
    description:
      "Simple and sturdy work table suitable for students and home offices.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "5-9 working days",
  },
  {
    id: "minimalist-tv-unit",
    name: "Minimalist TV Unit",
    priceInr: 5499,
    categoryId: "living-room",
    image: "/Images/Products/minimalist-tv-unit.jpg",
    description:
      "Modern TV unit with a low-profile design and practical storage surface.",
    material: "Solid Pinewood Pallets",
    finish: "Natural",
    leadTime: "5-9 working days",
  },
  {
    id: "pallet-planter-set",
    name: "Pallet Planter Set",
    priceInr: 2199,
    categoryId: "planters",
    image: "/Images/Products/pallet-planter-set.jpg",
    description:
      "Lightweight planter set for balconies, terraces, and outdoor corners.",
    material: "Treated Pinewood Pallets",
    finish: "Natural",
    leadTime: "3-7 working days",
  },
];

export function formatInr(value: number): string {
  return `INR ${value.toLocaleString("en-IN")}`;
}

export function getCategoryById(
  categoryId: string
): ProductCategory | undefined {
  return productCategories.find((category) => category.id === categoryId);
}