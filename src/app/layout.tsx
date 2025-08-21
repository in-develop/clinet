import StoreProvider from "@/app/providers/StoreProvider";
import { syne } from "@/shared/lib/fonts";
import "@/app/globals.css";
import { Header } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {};

  return (
    <html lang="en">
      <body className={syne.className}>
        <StoreProvider>
          <Header isAuthenticated={!!user} />
          {children}
          </StoreProvider>
      </body>
    </html>
  );
}
