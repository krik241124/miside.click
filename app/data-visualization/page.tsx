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
        <p className="leading-relaxed">
          Visualizing data effectively is crucial for understanding and analyzing
          the output from YOLOv8&apos;s object detection models. By transforming raw
          data into meaningful visual formats, you can gain insights that drive
          better decision-making and more efficient workflows.
        </p>
        <p className="leading-relaxed mt-4">
          YOLOv8 integrates seamlessly with various data visualization tools,
          allowing you to create dynamic charts and graphs that display trends
          and patterns in your detection data. From line graphs showing object
          counts over time to bar charts comparing different object classes,
          visualization enhances your understanding of the data.
        </p>
        <p className="leading-relaxed mt-4">
          You can use YOLOv8&apos;s output to generate pie charts that illustrate the
          distribution of detected objects across different categories, or heatmaps that highlight areas of high activity within your video feeds.
        </p>
        <p className="leading-relaxed mt-4">
          Data visualization not only simplifies the analysis process but also
          makes it easier to communicate results to stakeholders. Whether you
         &apos;re presenting to a technical team or a non-technical audience,
          effective visualizations can make complex data more accessible and
          understandable.
        </p>
        <p className="leading-relaxed mt-4">
          Explore the various visualization techniques available, and find the
          one that best suits your project needs, ensuring that your data is both
          actionable and easy to interpret.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default DataVisualization;
