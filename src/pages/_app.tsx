import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Cousine, Varela_Round, Crete_Round } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

const varela_round = Varela_Round({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-varela-round",
  weight: "400",
});

const crete_round = Crete_Round({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-crete-round",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        className={`bg-background ${inter.variable} ${crete_round.variable} ${cousine.variable} ${varela_round.variable} font-body text-text`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
