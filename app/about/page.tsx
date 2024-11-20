import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `About Us | ${config.appName}`,
  canonicalUrlRelative: "/about",
});

const AboutUs = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          About Us - {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Welcome to ${config.appName}, your ultimate destination for Unblocked Games 76! Our mission is to provide a seamless and enjoyable gaming experience for students, teachers, and gaming enthusiasts worldwide. Designed for accessibility, our platform offers a wide variety of games that can be played anywhere, including schools and workplaces, without requiring downloads or installations.

${config.appName} is a leading T1 Game Publisher dedicated to delivering engaging and legal games to our community. All games hosted on our platform adhere to licensing standards, including those under the GNU General Public License, as well as exclusive titles published through Developers Direct Agreements and partnerships with official Publishing Partners.

We are passionate about supporting internet freedom and advocating for an open and unrestricted online space, where everyone has the right to access legal digital content without unnecessary barriers.

At ${config.appName}, we value our vibrant community of players and are dedicated to providing exceptional support. Whether you have questions, suggestions, or need assistance, our support team is here to help. Your feedback is essential to us, and we use it to continuously enhance our platform and game offerings.

Before exploring the world of unblocked games on our site, we encourage you to review our Privacy Policy and Terms & Conditions to ensure a safe and enjoyable experience.

Thank you for choosing ${config.appName}—happy gaming!`}
        </pre>
      </div>
    </main>
  );
};

export default AboutUs;
