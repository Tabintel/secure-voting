import "./globals.css";
import { Montserrat } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "FaceIo",
  description:
    "Faceio built extensively using the power of Nextjs, Expresjs and Prisma",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ToasterProvider />
        {/* <ModalsProvider /> */}
        {children}
      </body>
    </html>
  );
}
