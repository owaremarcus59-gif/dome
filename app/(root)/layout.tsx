import { Navbar } from "@/components/customs/navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <section className="">
        <Navbar />
        <div>
        {children}
        </div>
   </section>
  );
}
