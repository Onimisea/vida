import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "./theme-provider";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const itc = localFont({
  src: [
    {
      path: "../public/itc.otf",
    },
  ],
  variable: "--itc",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIDA | The Pinnacle of Luxury",
  description:
    "The biggest real estate investment on the Lagos mainland, located at Surulere, Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${itc.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <section className="min-h-screen flex flex-col relative">
            <main className="flex-1">{children}</main>
          </section>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
