import { cn } from "@/lib/utils";
import { della, doodle, nunito, ojuju } from "@/styles/font";
import "@/styles/global.css";
import type { Metadata } from "next";

// components
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: {
    template: "pares",
    default: "Welcome to my Porfolio",
  },
  description:
    "Portfolio of Pahreza Iqbal Prastowo, a software engineer who loves to build things with code.",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          nunito.className,
          della.variable,
          doodle.variable,
          ojuju.variable
        )}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
