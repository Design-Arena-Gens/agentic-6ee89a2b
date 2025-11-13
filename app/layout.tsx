import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "क्या था बिग बैंग से पहले? | 10 मिनट वीडियो स्क्रिप्ट",
  description:
    "हिंदी में 10 मिनट का यूट्यूब वीडियो स्क्रिप्ट और दृश्य मार्गदर्शिका: बिग बैंग से पहले क्या था?"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
