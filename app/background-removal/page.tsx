import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Background Removal | ${config.appName}`,
  canonicalUrlRelative: "/background-removal",
});

const BackgroundRemoval = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Background Removal</h1>
        <p className="leading-relaxed">
          Remove the background from your photos quickly and accurately. Our tool helps you create clean and professional images.
        </p>
        {/* Add specific details about the background removal process */}
      </main>
      <Footer />
    </>
  );
};

export default BackgroundRemoval;
