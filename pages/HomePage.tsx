import React, { useState, useEffect } from "react";
import { Hero } from "../components/Hero.tsx";
import { ProductShowcase } from "../components/ProductShowcase.tsx";
import { ModularConcept } from "../components/ModularConcept.tsx";
import { AILayer } from "../components/AILayer.tsx";
import { WhyArcVion } from "../components/WhyArcVion.tsx";
import { Industries } from "../components/Industries.tsx";
import { AboutUsSection } from "../components/AboutUsSection.tsx";
import { CallToAction } from "../components/CallToAction.tsx";
import { PageTransition } from "../components/PageTransition.tsx";

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      <Hero scrollY={scrollY} />
      <ProductShowcase />
      <ModularConcept />
      <AILayer />
      <WhyArcVion />
      <Industries />
      <AboutUsSection />
      <CallToAction />
    </PageTransition>
  );
};

export default HomePage;
