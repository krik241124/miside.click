import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Wukong Gameplay | ${config.appName}`,
  canonicalUrlRelative: "/wukong-gameplay",
});

const WukongGameplay = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Black Myth: Wukong Gameplay</h1>
        <p className="leading-relaxed">
          Black Myth: Wukong offers an immersive gameplay experience that blends
          fast-paced combat with exploration and puzzle-solving. Learn more about
          the mechanics, combat styles, and special abilities available to the players.
        </p>
        {/* Add gameplay details here */}
      </main>
      <Footer />
    </>
  );
};

export default WukongGameplay;
