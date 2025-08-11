import StoreProvider from "@/app/providers/StoreProvider";
import { syne, urbanist } from "@/shared/lib/fonts";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={syne.variable} lang="en">
      <body className={urbanist.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
