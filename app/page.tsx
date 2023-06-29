import Image from "next/image";
import { Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
      </div>
    </main>
  );
}
