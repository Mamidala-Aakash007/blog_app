import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog App",
  description: "blog web application to upload your real stories",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ToastContainer theme="dark" />
      <html lang="en">
        <body className={`${outfit.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
