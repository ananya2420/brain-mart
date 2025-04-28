function HeroSection(){
    return(
        <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Discover New Collection</h1>
          <p className="text-gray-600">Fashion flows with the rhythm of daily life, shifting with each event and moment in time.</p>
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">Start Shopping</button>
            <span className="text-yellow-500 font-bold">25% OFF New Arrivals</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/user-icon.png" alt="user icon" className="w-6 h-6" />
            <p className="text-gray-500">15K+ Wall Reviews</p>
          </div>
        </div>
  
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <img src="/images/shopping-cart.png" alt="Featured Product" className="w-80 h-auto" />
        </div>
      </section>
    )

}
export default HeroSection;