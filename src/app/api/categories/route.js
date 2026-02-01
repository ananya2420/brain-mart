

export async function GET() {
    const categories = [
      { title: "Phones", image: "/images/phones.png" },
      { title: "Computers", image: "/images/computers.png" },
      { title: "Smartwatch", image: "/images/SmartWatch.png" },
      { title: "Headphones", image: "/images/HeadPhones.png" },
      { title: "Gaming", image: "/images/Gaming.png" },
    ];
  
    return new Response(JSON.stringify(categories), {
      headers: { "Content-Type": "application/json" },
    });
  }
  