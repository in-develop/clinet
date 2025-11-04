import "@/app/globals.css";
import StoreProvider from "@/app/providers/StoreProvider";
import { syne } from "@/shared/lib/fonts";
import { UpButton } from "@/shared/ui/UpButton";
import { Footer, Header } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = null; // Replace with actual user authentication logic

  return (
    <html lang="en">
      <body className={syne.className}>
        <StoreProvider>
          <Header isAuthenticated={Boolean(user)} />
          {children}
          <section className="min-h-screen bg-amber-400"></section>
          <Footer />
          <UpButton />
        </StoreProvider>
      </body>
    </html>
  );
}
