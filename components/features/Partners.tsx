"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "IATA", src: "/images/partners/Iata.webp" },
  { name: "IATAN", src: "/images/partners/Iatan.webp" },
  { name: "ARC", src: "/images/partners/arc.webp" },
  { name: "ASTA", src: "/images/partners/asta.webp" },
  { name: "CLIA", src: "/images/partners/clia.webp" },
  { name: "MMSDC", src: "/images/partners/mmsdc.webp" },
];

const Partners = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Our Partners & Accreditations</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="relative w-24 h-16 md:w-32 md:h-20 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
