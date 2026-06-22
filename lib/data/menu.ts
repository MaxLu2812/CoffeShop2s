import type { MenuItem } from "@/lib/types";

export const menuItems: MenuItem[] = [
  // ── ESPRESSO CATEGORY ──
  { id: "esp-1", name: "Espresso", description: "Single-origin double shot, rich and smooth with a hazelnut finish", price: "£3.20", category: "espresso", featured: true },
  { id: "esp-2", name: "Espresso Macchiato", description: "Espresso with a dollop of steamed milk foam", price: "£3.50", category: "espresso" },
  { id: "esp-3", name: "Flat White", description: "Double ristretto with silky microfoam, served in a ceramic cup", price: "£4.20", category: "espresso" },
  { id: "esp-4", name: "Cappuccino", description: "Equal parts espresso, steamed milk, and velvety foam with a light cocoa dusting", price: "£4.00", category: "espresso" },
  { id: "esp-5", name: "Cortado", description: "Espresso cut with a small amount of warm milk to soften the acidity", price: "£3.80", category: "espresso" },
  { id: "esp-6", name: "Oat Milk Latte", description: "Smooth double espresso with steamed oat milk — dairy-free, never compromised", price: "£4.60", category: "espresso" },

  // ── POUR-OVER CATEGORY ──
  { id: "pour-1", name: "Ethiopian Yirgacheffe", description: "Floral and bright with notes of bergamot, honey, and jasmine", price: "£5.00", category: "pour-over", featured: true },
  { id: "pour-2", name: "Colombian Gesha", description: "Delicate and complex with tropical fruit, lavender, and a silky mouthfeel", price: "£6.50", category: "pour-over" },
  { id: "pour-3", name: "Costa Rica Honey Process", description: "Sweet and balanced with caramel, red apple, and a clean finish", price: "£5.50", category: "pour-over" },
  { id: "pour-4", name: "Kenyan AA", description: "Bold and vibrant with blackcurrant, tomato, and a wine-like acidity", price: "£5.00", category: "pour-over" },

  // ── PASTRIES CATEGORY ──
  { id: "past-1", name: "Butter Croissant", description: "Classic French laminated pastry with 24 layers of butter, baked fresh daily", price: "£3.80", category: "pastries" },
  { id: "past-2", name: "Cinnamon Scroll", description: "Soft brioche swirled with brown sugar cinnamon, topped with cream cheese icing", price: "£4.20", category: "pastries" },
  { id: "past-3", name: "Blueberry Muffin", description: "Tender crumb studded with wild blueberries and a hint of lemon zest", price: "£3.80", category: "pastries" },
  { id: "past-4", name: "Almond Croissant", description: "Butter croissant filled with frangipane, topped with flaked almonds and icing sugar", price: "£4.50", category: "pastries" },
  { id: "past-5", name: "Banana Loaf", description: "Moist banana bread with dark chocolate chunks and a drizzle of honey", price: "£3.80", category: "pastries" },
  { id: "past-6", name: "Pain au Chocolat", description: "Flaky laminated pastry wrapped around two sticks of dark Valrhona chocolate", price: "£4.20", category: "pastries" },

  // ── SIGNATURE CATEGORY ──
  { id: "sig-1", name: "Honey Lavender Latte", description: "Espresso with oat milk, lavender honey syrup, and a touch of vanilla", price: "£5.50", category: "signature", featured: true },
  { id: "sig-2", name: "Brown Sugar Shaken Espresso", description: "Double espresso shaken with brown sugar and cinnamon, topped with oat milk", price: "£5.00", category: "signature" },
  { id: "sig-3", name: "Vanilla Bean Cold Brew", description: "Slow-steeped for 18 hours, finished with Madagascar vanilla bean and a splash of cream", price: "£5.00", category: "signature" },
  { id: "sig-4", name: "Spiced Chai Latte", description: "House-blend chai brewed with cinnamon, cardamom, ginger, and clove, topped with steamed milk", price: "£4.80", category: "signature" },
  { id: "sig-5", name: "Dark Chocolate Mocha", description: "Double espresso with 70% Valrhona dark chocolate ganache and steamed milk", price: "£5.20", category: "signature" },
  { id: "sig-6", name: "Matcha Oat Latte", description: "Ceremonial-grade matcha whisked with oat milk — earthy, creamy, and vibrant green", price: "£5.00", category: "signature" },
];
