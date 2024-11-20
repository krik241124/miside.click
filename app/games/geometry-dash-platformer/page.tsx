import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Geometry Dash Platformer | ${config.appName}`,
  canonicalUrlRelative: "/games/geometry-dash-platformer",
});

const GeometryDashPlatformer = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Geometry Dash Platformer</h1>
        <div className="flex justify-center my-6">
          <iframe
            src="https://scratch.mit.edu/projects/965649234/embed"
            allowTransparency={true}
            width="800"
            height="600"
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

export default GeometryDashPlatformer;
