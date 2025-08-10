import CarCategories from "../components/Front/Home/CarCategories";
import FeaturedDeals from "../components/Front/Home/FeaturedDeals";
import HeroSection from "../components/Front/Home/HeroSection";
import SubLinks from "../components/Front/Home/SubLinks";
import SubNav from "../components/Front/Home/SubNav";
import WhyChooseUs from "../components/Front/Home/WhyChooseUs";


export default function HomePage() {
  return (
      <main>
        <SubNav/>
        <SubLinks/>
        <HeroSection />
        <FeaturedDeals />
        <CarCategories />
        <WhyChooseUs />
      </main>
  );
}