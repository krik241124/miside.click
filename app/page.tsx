import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Examples from "@/components/Problem";
import Features from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import Steps from "@/components/CTA";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Examples />
        <Features />
        <Steps />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}