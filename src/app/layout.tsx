import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const dmSans = DM_Sans({

  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your work with Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${dmSans.className} h-full antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>

    </ClerkProvider>

  );
}
