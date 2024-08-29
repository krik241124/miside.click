// app/layout.tsx

import { ReactNode } from "react";
import localFont from "next/font/local";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf",
  variable: '--font-inter',
});

export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={inter.variable}>
      <head>
        {/* Insert Google Analytics script directly into the head */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HNVVLX3NQQ"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HNVVLX3NQQ');
          `,
        }} />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
