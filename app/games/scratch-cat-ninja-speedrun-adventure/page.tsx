import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Data Visualization | ${config.appName}`,
  canonicalUrlRelative: "/data-visualization",
});

const DataVisualization = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Data Visualization</h1>
        {/* 添加嵌入的 iframe */}
        <div className="flex justify-center my-6">
          <iframe
            src="https://scratch.mit.edu/projects/725916250/embed"
            allowTransparency={true}
            width="485"
            height="402"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="shadow-lg"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DataVisualization;
