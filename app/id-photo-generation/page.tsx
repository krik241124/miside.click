import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `ID Photo Generation | ${config.appName}`,
  canonicalUrlRelative: "/id-photo-generation",
});

const IDPhotoGeneration = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">ID Photo Generation</h1>
        <p className="leading-relaxed">
          Generate professional ID photos with ease. Our tool ensures your photos meet the necessary specifications for official documents.
        </p>
        {/* Add specific details about the ID photo generation process */}
      </main>
      <Footer />
    </>
  );
};

export default IDPhotoGeneration;
