import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Realistic Rendering | ${config.appName}`,
  canonicalUrlRelative: "/realistic-rendering",
});

const RealisticRendering = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Realistic Rendering</h1>
        <p className="leading-relaxed">
          AWPortraitFL sets a new standard in realistic rendering by leveraging advanced techniques within the Flux architecture. With an unparalleled focus on detail and composition, this model achieves a level of realism that was previously unattainable.
        </p>
        <p className="leading-relaxed mt-4">
          Whether you&apos;re creating high-quality portraits or detailed scenes, AWPortraitFL enhances the beauty and accuracy of your images. The model&apos;s fine-tuned parameters ensure that every aspect, from lighting to texture, is rendered with exquisite precision.
        </p>
        {/* Add specific details about the rendering process and technology behind it */}
      </main>
      <Footer />
    </>
  );
};

export default RealisticRendering;
