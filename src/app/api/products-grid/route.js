export async function GET() {
    const products = [
      {
        id: 1,
        name: "FREE AND FAST DELIVERY",
        title: "Free delivery for all orders over $140",
        image: "/images/vehicle.png",
      },
      {
        id: 2,
        name: "24/7 CUSTOMER SERVICE",
        title: "Friendly 24/7 customer service",
        image: "/images/womens collection.png",  // no spaces
      },
      {
        id: 3,
        name: "MONEY BACK GUARANTEE",
        title: "We return money within 30 days",
        image: "/images/speakers.png",
      }
    ];
  
    return Response.json(products);
  }
  