
export async function GET() {
    const featuredProducts = [
      { id: 1, name: "Cap", image: "/images/cap.png" },
      { id: 2, name: "Perfume", image: "/images/perfumes.png" },
      { id: 3, name: "Sneaker", image: "/images/sneakers.png" },
    ];
  
    return new Response(JSON.stringify(featuredProducts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }