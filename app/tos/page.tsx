import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 2, 2024

Welcome to ${config.appName}!

These Terms of Service ("Terms") govern your use of the ${config.appName} website at https://black-myth-wukong.top ("Website") and the services provided by ${config.appName}. By using our Website and services, you agree to these Terms.

1. Description of ${config.appName}

${config.appName} is a platform designed to share information, updates, and community content related to ${config.appName}.

2. Content Ownership and Usage Rights

The content shared on ${config.appName}, including text, images, and videos, is owned by the respective creators. By contributing content, you grant us a non-exclusive right to display it on the Website. You retain ownership but do not have the right to resell any content hosted on the site.

3. User Data and Privacy

We collect and store user data, including name and email, as necessary to provide our services. For details on how we handle your data, please refer to our Privacy Policy at https://black-myth-wukong.top/privacy-policy.

4. Non-Personal Data Collection

We use web cookies to collect non-personal data for the purpose of improving our services and user experience.

5. Governing Law

These Terms are governed by the laws of China.

6. Updates to the Terms

We may update these Terms from time to time. Users will be notified of any changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at [Your Contact Email].

Thank you for visiting ${config.appName}!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
