

export async function GET() {
    const infos = [
      {
        id: 1,
        title: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
        image: "/images/delivery.png",
      },
      {
        id: 2,
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer service",
        image: "/images/customer-service.png",
      },
      {
        id: 3,
        title: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days",
        image: "/images/money-back.png",
      },
    ];
  
    return Response.json(infos);
  }
  