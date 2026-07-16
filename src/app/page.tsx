import Hero from "@/components/home/Hero";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Hero /> 
      <FeaturedRecipes />
    </div>
  );
}