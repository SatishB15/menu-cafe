export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  imageUrl: string
}

export const menuData: { [key: string]: MenuItem[] } = {
  beverages: [
    {
      id: "b1",
      name: "Signature Espresso",
      description:
        "Our house blend of carefully selected beans, roasted to perfection for a rich, bold flavor with notes of chocolate and caramel.",
      price: 110,
      tags: ["hot", "popular"],
      imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=774&auto=format&fit=crop", // Fixed URL
    },
    {
      id: "b2",
      name: "Vanilla Latte",
      description:
        "Smooth espresso combined with steamed milk and our house-made vanilla syrup, topped with a light layer of foam.",
      price: 120,
      tags: ["hot", "cold", "dairy-free"],
      imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=870&auto=format&fit=crop",
    },
    {
      id: "b3",
      name: "Matcha Green Tea Latte",
      description:
        "Premium ceremonial grade matcha whisked with your choice of milk for a creamy, earthy experience rich in antioxidants.",
      price: 180,
      tags: ["hot", "cold", "healthy", "dairy-free"],
      imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=870&auto=format&fit=crop",
    },
    {
      id: "b4",
      name: "Cold Brew",
      description:
        "Steeped for 18 hours, our cold brew offers a naturally sweet, incredibly smooth coffee experience with low acidity.",
      price: 150,
      tags: ["cold", "popular", "dairy-free", "vegan"],
      imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=774&auto=format&fit=crop",
    },
    {
      id: "b5",
      name: "Chai Tea Latte",
      description:
        "A warming blend of black tea and aromatic spices including cinnamon, cardamom, and ginger, lightly sweetened and mixed with steamed milk.",
      price: 199,
      tags: ["hot", "spicy"],
      imageUrl: "https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?q=80&w=774&auto=format&fit=crop",
    },
  ],
  pastries: [
    {
      id: "p1",
      name: "Butter Croissant",
      description: "Flaky, buttery layers create this classic French pastry, baked fresh daily until golden and crisp.",
      price: 199,
      tags: ["breakfast", "popular"],
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1026&auto=format&fit=crop",
    },
    {
      id: "p2",
      name: "Blueberry Scone",
      description: "Tender, crumbly scone bursting with fresh blueberries and finished with a light lemon glaze.",
      price: 80,
      tags: ["breakfast"],
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=870&auto=format&fit=crop", // Fixed URL
    },
    {
      id: "p3",
      name: "Chocolate Chunk Cookie",
      description: "Soft and chewy cookie loaded with chunks of premium dark chocolate and a hint of sea salt.",
      price: 96,
      tags: ["dessert", "dairy-free"],
      imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1064&auto=format&fit=crop",
    },
    {
      id: "p4",
      name: "Seasonal Fruit Tart",
      description:
        "Buttery shortbread crust filled with vanilla custard and topped with an arrangement of fresh seasonal fruits.",
      price: 88,
      tags: ["dessert", "seasonal"],
      imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1170&auto=format&fit=crop",
    },
    {
      id: "p5",
      name: "Gluten-Free Banana Bread",
      description: "Moist and flavorful banana bread made with almond flour, walnuts, and a touch of cinnamon.",
      price: 79,
      tags: ["breakfast", "gluten-free", "dairy-free"],
      imageUrl: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?q=80&w=870&auto=format&fit=crop",
    },
  ],
  specials: [
    {
      id: "s1",
      name: "Seasonal Affogato",
      description:
        "A scoop of artisanal vanilla bean ice cream drowned in a shot of hot espresso, topped with seasonal flavored whipped cream.",
      price: 99,
      tags: ["dessert", "seasonal", "popular"],
      imageUrl: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=774&auto=format&fit=crop",
    },
    {
      id: "s2",
      name: "Lavender Honey Latte",
      description:
        "Our signature espresso infused with house-made lavender syrup and local honey, topped with frothed milk and dried lavender buds.",
      price: 199,
      tags: ["hot", "seasonal"],
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop",
    },
    {
      id: "s4",
      name: "Vegan Buddha Bowl",
      description:
        "A nourishing bowl of quinoa, roasted sweet potatoes, avocado, kale, chickpeas, and tahini dressing.",
      price: 599,
      tags: ["lunch", "vegan", "gluten-free", "dairy-free", "healthy"],
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1180&auto=format&fit=crop",
    },
  ],
}
