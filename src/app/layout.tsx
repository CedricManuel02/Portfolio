import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/_components/shared/navigation-bar";
import Footer from "@/_components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "@cedricmanuel",
  description: "@cedricmanuel portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme={"dark"} lang="en">
      <body className="bg-[#121212] min-h-screen h-auto w-full">
        <NavigationBar />
        {children}
        <Footer />
        <Toaster
          theme="dark"
        
        />
      </body>
    </html>
  );
}
