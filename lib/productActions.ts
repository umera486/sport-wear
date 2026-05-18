// 1. DATA SOURCE
export const MASTER_ARCHIVE = [
  { id: 1, name: "AURORA SHELL", price: "$420", category: "OUTERWEAR", img: "/women-product.png.jpg" },
  { id: 2, name: "PHANTOM TIGHTS", price: "$180", category: "PERFORMANCE", img: "/men-product.png.jpg" },
  { id: 3, name: "CORE VEST", price: "$310", category: "LAYERING", img: "/women-product.png.jpg" },
  { id: 4, name: "VECTOR RUNNER", price: "$250", category: "FOOTWEAR", img: "/men-product.png.jpg" },
  { id: 5, name: "ONYX BASE", price: "$120", category: "ESSENTIALS", img: "/women-product.png.jpg" },
  { id: 6, name: "STORM SHIELD", price: "$550", category: "TACTICAL", img: "/men-product.png.jpg" },
];

// 2. MATH HELPER (Prevents NaN Errors)
export const parsePrice = (price: string | number): number => {
  if (typeof price === "number") return price;
  return parseFloat(price.replace(/[^0-9.-]+/g, ""));
};

// 3. SEARCH LOGIC
export async function getSearchResults(query: string) {
  const searchLower = query.toLowerCase().trim();
  const filtered = MASTER_ARCHIVE.filter((item) =>
    item.name.toLowerCase().includes(searchLower) ||
    item.category.toLowerCase().includes(searchLower)
  );
  return filtered.length > 0 ? filtered : MASTER_ARCHIVE;
}