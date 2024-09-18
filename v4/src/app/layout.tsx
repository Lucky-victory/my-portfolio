import "./globals.css";
import type { Metadata } from "next";
import { ChakraProvider } from "./providers/chakra-provider";
import { Inter, Fredoka, PT_Sans } from "next/font/google";

const fredokaOne = Fredoka({ subsets: ["latin"] });
const inter = PT_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Lucky Victory | Web Developer",
  description:
    "Lucky Victory, A web developer with a focus on delivering significant results, eager to tackle a variety of challenges and employ creativity to craft user-centric interfaces. Bringing proficiency in project management, resolving user-centric issues, and promoting collaborative teamwork. Skilled in leveraging innovative tools and methodologies to streamline workflows and enhance user satisfaction.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://www.devvick.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Lucky Victory | Full-stack Web Developer"
        />
        <meta
          property="og:description"
          content="Lucky Victory, A dedicated Frontend Web developer with a profound passion for design
                aesthetics."
        />
        <meta
          property="og:image"
          content="https://devvick.com/images/devvick-og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devvick.com" />
        <meta property="twitter:url" content="https://devvick.com" />
        <meta name="twitter:title" content="Lucky Victory | Portfolio" />
        <meta
          name="twitter:description"
          content="Lucky Victory, A dedicated Frontend Web developer with a profound passion for design
                aesthetics."
        />
        <meta
          name="twitter:image"
          content="https://devvick.com/images/devvick-og.png"
        />
        <meta
          name="keywords"
          content="AI Developer, ML, Web3, Crypto Lucky Victory web developer frontend developer software Engineer Nigeria Remote software Engineer React Angular Nodejs Ionic Framework7 developer Lucky Victory Success"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-19/2x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
