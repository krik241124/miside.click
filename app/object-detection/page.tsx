import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Object Detection | ${config.appName}`,
  canonicalUrlRelative: "/object-detection",
});

const ObjectDetection = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-extrabold pb-6">Object Detection</h1>
        <p className="leading-relaxed">
          YOLOv8 is the latest iteration in the YOLO series, known for its
          cutting-edge real-time object detection capabilities. Whether you&apos;re working on a simple project or a complex application, YOLOv8 offers high-speed detection with improved accuracy and efficiency.
        </p>
        <p className="leading-relaxed mt-4">
          The architecture behind YOLOv8 has been optimized to handle
          challenging scenarios, including occlusions, varying lighting
          conditions, and complex backgrounds. This makes it suitable for a wide
          range of applications, from autonomous driving to security surveillance.
        </p>
        <p className="leading-relaxed mt-4">
          YOLOv8&apos;s ability to detect and classify multiple objects in a single
          frame, while maintaining high speed, sets it apart from other detection
          models. With YOLOv8, you can leverage state-of-the-art deep learning
          techniques to achieve unparalleled performance in object detection.
        </p>
        <p className="leading-relaxed mt-4">
          Whether you&apos;re developing AI-driven solutions for real-time video
          analysis, enhancing your security system, or building next-generation
          robots, YOLOv8 provides the tools you need to succeed.
        </p>
        <p className="leading-relaxed mt-4">
          Discover more about how YOLOv8&apos;s capabilities can enhance your
          projects by exploring the detailed documentation and case studies
          available on the official Ultralytics website.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ObjectDetection;
