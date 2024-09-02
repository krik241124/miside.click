import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Six-Inch Photo Layout | ${config.appName}`,
  canonicalUrlRelative: "/six-inch-photo-layout",
});

const SixInchPhotoLayout = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Six-Inch Photo Layout</h1>
        <p className="leading-relaxed">
          Arrange and print your photos with our Six-Inch Photo Layout tool. Perfect for creating photo albums and prints.
        </p>
        {/* Add specific details about the six-inch photo layout process */}
      </main>
      <Footer />
    </>
  );
};

export default SixInchPhotoLayout;
