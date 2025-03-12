import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";


const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "TradeBlade",
  description: "Моментально копируй сделки профи трейдеров",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable}`}>
        {/* <div className="layout-wrapper"> */}
          {children}
        {/* </div> */}
      </body>
    </html>
  );
}
