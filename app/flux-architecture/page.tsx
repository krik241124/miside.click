import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Flux Architecture | ${config.appName}`,
  canonicalUrlRelative: "/flux-architecture",
});

const FluxArchitecture = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Flux Architecture</h1>
        <p className="leading-relaxed">
          The Flux Architecture underpinning AWPortraitFL is a key factor in its superior performance. This architecture allows for the seamless integration of complex rendering tasks, ensuring that the model produces consistently high-quality outputs.
        </p>
        <p className="leading-relaxed mt-4">
          By structuring data flow and process management in a way that maximizes efficiency and output quality, Flux enables AWPortraitFL to handle detailed rendering with ease. The architecture&apos;s robustness and scalability make it an ideal choice for high-demand environments.
        </p>
        {/* Add specific technical details and advantages of Flux Architecture */}
      </main>
      <Footer />
    </>
  );
};

export default FluxArchitecture;
