import DestinationCard from "@/components/features/DestinationCard";
import Image from "next/image";
import { constructMetadata } from "@/components/seo/Meta";
import { tours } from "@/data/tours";
import { ScrollTop } from 'primereact/scrolltop';
import { redirect } from "next/navigation";

export const metadata = constructMetadata({
  title: "Home",
  description: "Curated luxury tours and experiences.",
});

export default function Home() {
  redirect("/europe-tour-packages-2026");
  
  return (
    <div className="min-h-screen bg-white">
      <ScrollTop />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Tours Hero" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Curated Journeys</h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light">Immersive experiences designed for the modern explorer. Discover the world with our handpicked tour packages.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <DestinationCard key={tour.id} {...tour} linkPrefix="" />
          ))}
        </div>
      </div>
    </div>
  );
}
