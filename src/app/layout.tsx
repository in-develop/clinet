import "@/app/globals.css";
import StoreProvider from "@/app/providers/StoreProvider";
import { syne } from "@/shared/lib/fonts";
<<<<<<< HEAD
import { Header } from "@/widgets";
=======
import { UpButton } from "@/shared/ui/UpButton";
import { Footer, Header } from "@/widgets";
>>>>>>> 0838ac598d803293784a6cdd14fe4242bdc5e80f

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
<<<<<<< HEAD
=======
          <Footer />
          <UpButton />
>>>>>>> 0838ac598d803293784a6cdd14fe4242bdc5e80f
        </StoreProvider>
      </body>
    </html>
  );
}
