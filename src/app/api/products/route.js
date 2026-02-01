// app/api/products/route.js

export async function GET() {
    const products = [
      {
        id: 1,
        name: "Gaming Headphone",
        price: "BDT 3,000",
        image: "/images/headphones.png",
      },
      {
        id: 2,
        name: "Gaming Keyboards",
        price: "BDT 5,000",
        image: "/images/keyboard.png",
      },
      {
        id: 3,
        name: "T-shirt",
        price: "BDT 1,200",
        image: "/images/t-shirt.png",
      },
      {
        id: 4,
        name: "Sunglasses",
        price: "BDT 2,500",
        image: "/images/sunglass.png",
      },
    ];
  
    return new Response(JSON.stringify(products), { status: 200 });
  }
  