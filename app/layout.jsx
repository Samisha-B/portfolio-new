import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--serif", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--sans", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Simran B. | Website Designer & Developer for Small Businesses",
  description: site.description,
  openGraph: {
    title: "Simran B. - Websites That Work Beautifully",
    description: site.description,
    type: "website",
    siteName: "Simran B.",
  },
  twitter: { card: "summary_large_image", title: "Simran B. - Websites That Work Beautifully", description: site.description },
};

export const viewport = { themeColor: "#FAF6EF" };

export default function RootLayout({ children }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Simran B. - Web Design & Development",
    description: site.description,
    url: site.url,
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}
