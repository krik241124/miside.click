import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Wukong Story | ${config.appName}`,
  canonicalUrlRelative: "/wukong-story",
});

const WukongStory = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Black Myth: Wukong Story</h1>
        <p className="leading-relaxed">
          Delve into the captivating story of Black Myth: Wukong, inspired by the
          classic Chinese novel &quot;Journey to the West&quot;. Follow Sun Wukong&apos;s journey
          as he battles demons, gods, and mythical creatures.
        </p>
        {/* Add story details here */}
      </main>
      <Footer />
    </>
  );
};

export default WukongStory;
