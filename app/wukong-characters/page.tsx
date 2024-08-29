import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Wukong Characters | ${config.appName}`,
  canonicalUrlRelative: "/wukong-characters",
});

const WukongCharacters = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Black Myth: Wukong Characters</h1>
        <p className="leading-relaxed">
          Explore the diverse range of characters in Black Myth: Wukong. From the
          powerful Sun Wukong to mythical creatures, each character plays a vital
          role in the game&apos;s storyline.
        </p>
        {/* Add character descriptions here */}
      </main>
      <Footer />
    </>
  );
};

export default WukongCharacters;
