// app/api/our-products/route.js

export async function GET() {
    const ourProducts = [
      { id: 1, name: "Iphone 16 pro max", price: "BDT 3,00,000", image: "/images/Iphone 16 Pro Max.png" },
      { id: 2, name: "Highlighter", price: "BDT 500", image: "/images/highlighter.png" },
      { id: 3, name: "Smart Watch", price: "BDT 10,000", image: "/images/smart watch.png" },
      { id: 4, name: "Waterpot", price: "BDT 300", image: "/images/waterpot.png" },
      { id: 5, name: "Coffee Mug", price: "BDT 150", image: "/images/coffee mug.png" },
      { id: 6, name: "Eye Shadow", price: "BDT 800", image: "/images/eye shadow.png" },
      { id: 7, name: "Phone Cover", price: "BDT 2,500", image: "/images/phone cover.png" },
      { id: 8, name: "Headphone", price: "BDT 2,500", image: "/images/headphones.png" },
    ];
  
    return new Response(JSON.stringify(ourProducts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  