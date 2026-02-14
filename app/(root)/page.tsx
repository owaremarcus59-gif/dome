import { Trending } from "@/components/customs/trending";
import Hero from "@/components/pages/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <Hero
        className="pt-10 "
      />
      
      <div className="flex flex-col pt-10 p-4">
        <p className="font-bold text-2xl">Trending Products</p>
        <Trending/>

      </div>
      <Trending/>
      <Trending/>
    </section>
  );
}
