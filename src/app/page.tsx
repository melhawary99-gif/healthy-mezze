import Hero from "@/components/home/Hero";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import Categories from "@/components/home/Categories";
import WhyHealthyMezze from "@/components/home/WhyHealthyMezze";
import HealthyTip from "@/components/home/HealthyTip";
import Newsletter from "@/components/Newsletter";
import SearchRecipes from "@/components/recipes/SearchRecipes";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Hero /> 
      <SearchRecipes />
      <FeaturedRecipes />
      <Categories />
      <WhyHealthyMezze />
      <HealthyTip />
      <Newsletter variant="hero" />

    </div>
  );
}