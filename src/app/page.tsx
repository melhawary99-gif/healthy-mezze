import Hero from "@/components/home/Hero";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Hero /> 
      <FeaturedRecipes />
      <Categories />

    </div>
  );
}