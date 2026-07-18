import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import Statistics from "@/components/home/Statistics";
import WhyHealthyMezze from "@/components/home/WhyHealthyMezze";
import HealthyTip from "@/components/home/HealthyTip";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="bg-[#FAFAF7]">
      <Hero />

      <Categories />

      <FeaturedRecipes />

      <Statistics />

      <WhyHealthyMezze />

      <HealthyTip />

      <Newsletter variant="hero" />
    </main>
  );
}