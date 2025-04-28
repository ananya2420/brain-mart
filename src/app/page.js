
import Banner from "./components/Banner";
import BestSallingProducts from "./components/BestSellingProducts";
import BrowseByCategories from "./components/BrowseByCategories";
import Cart from "./components/Cart";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import ProductGrid from "./components/ProductGrid";
import ProductsPage from "./components/products/page";
import SignupSection from "./components/SignupSection";


export default function Home() {
  return (
    <div>
      
      <Header />
      <Navbar />
      <Cart />
      <HeroSection />
      <BrowseByCategories />
      <FeaturedProducts />
      <ProductsPage />
      <BestSallingProducts />
      <Banner />
      <OurProducts />
      <ProductGrid />
      <InfoSection />
      <SignupSection />
      <Footer />
    

    </div>
  );
}
