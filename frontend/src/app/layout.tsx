"use client";

import { Poppins, Dancing_Script,Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
})

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes where navbar & hero should NOT appear
  const noHeaderRoutes = ["/login", "/create-user"];
  const hideHeader = noHeaderRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dancing_script.variable} ${cormorant_garamond.variable} antialiased bg-[#F5F5DC] min-h-screen`}
      >
        {!hideHeader && (
          <>
            {/* Put your Navbar/HeroBanner here if needed */}
          </>
        )}
        {children}
      </body>
    </html>
  );
}
