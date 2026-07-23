import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Categories = dynamic(() => import("@/components/home/Categories"));
const FeaturedRecipes = dynamic(() => import("@/components/home/FeaturedRecipes"));
const Statistics = dynamic(() => import("@/components/home/Statistics"));
const WhyHealthyMezze = dynamic(() => import("@/components/home/WhyHealthyMezze"));
const HealthyTip = dynamic(() => import("@/components/home/HealthyTip"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Hero />

      <Categories />

      <FeaturedRecipes />

      <Statistics />

      <WhyHealthyMezze />

      <HealthyTip />

      <Newsletter variant="hero" />
    </div>
  );
}