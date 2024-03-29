import "./globals.css";
import Header from "./comopents/Header";
import ChakraWrapper from "./ChakraWrapper";
import SessionWrapper from "./SessionWrapper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000] ">
        <SessionWrapper>
          <Header />
          <ChakraWrapper>
            <main className="flex flex-col justify-center items-center">
              {children}
            </main>
          </ChakraWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
