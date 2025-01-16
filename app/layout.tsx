import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ForecastAI - ChatGPT Plugin to get the weather of any given location",
  description:
    "ForecastAI is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and served from Vercel's Edge Network.",
  twitter: {
    card: "summary_large_image",
    title:
      "ForecastAI - ChatGPT Plugin to get the weather of any given location",
    description:
      "ForecastAI is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and served from Vercel's Edge Network.",
    creator: "@AA",
  },
  metadataBase: new URL("https://weather-ai-qawin.vercel.app/"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
