// app/api/best-selling-products/route.js
export async function GET() {
    const bestSellingProducts = [
      { id: 1, name: "Changing mini fan", price: "BDT 3,000", image: "/images/charging mini fan.png" },
      { id: 2, name: "Mens jogger", price: "BDT 5,000", image: "/images/mens joggers.png" },
      { id: 3, name: "Desk chair", price: "BDT 1,200", image: "/images/desk chair.png" }
    ];
  
    return new Response(JSON.stringify(bestSellingProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  