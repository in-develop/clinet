import "@/app/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import { ReactNode } from "react";

import StoreProvider from "@/app/providers/StoreProvider";
import { syne } from "@/shared/lib/fonts";
import { UpButton } from "@/shared/ui/UpButton";
import { Footer, Header } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const user = null; // Replace with actual user authentication logic

  return (
    <html lang="en">
      <body className={syne.className}>
        <StoreProvider>
          <NuqsAdapter>
            <Header isAuthenticated={Boolean(user)} />
            {children}
            <section className="min-h-screen bg-amber-400"></section>
            <Footer />
            <UpButton />
          </NuqsAdapter>
        </StoreProvider>
      </body>
    </html>
  );
}
