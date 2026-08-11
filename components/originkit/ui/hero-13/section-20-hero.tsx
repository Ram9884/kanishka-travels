// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import GalleryTunnel from "@/components/originkit/ui/hero-13/gallery-tunnel";
import { HeroContent } from "@/components/originkit/ui/hero-13/hero-content";

/** Fleet car photos for the dark theme 3D tunnel */
const DEFAULT_IMAGES = [
  { src: "/images/fleet/innova-crysta.jpg", alt: "Toyota Innova Crysta" },
  { src: "/images/fleet/innova-hycross.jpg", alt: "Toyota Innova Hycross" },
  { src: "/images/fleet/swift-dzire.jpg", alt: "Swift Dzire" },
  { src: "/images/fleet/kia-carens.jpg", alt: "Kia Carens" },
  { src: "/images/fleet/maruti-ertiga.jpg", alt: "Maruti Ertiga" },
  { src: "/images/fleet/toyota-etios.jpg", alt: "Toyota Etios" },
  { src: "/images/fleet/tempo-traveller.jpg", alt: "Tempo Traveller" },
  { src: "/images/fleet/mini-bus.jpg", alt: "Luxury Mini Bus" },
];

export const Section20Hero = () => {
  const handleExploreGallery = () => {
    /* navigation disabled in preview */ void 0;
  };

  const handleBookShoot = () => {
    /* navigation disabled in preview */ void 0;
  };

  return (
    <section
      aria-label="Elevating travel experience through perspective"
      className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#0B0B0D]"
    >
      {/* 3D car tunnel */}
      <div
        aria-hidden="true"
        className="pointer-events-auto absolute inset-0 z-0"
      >
        <GalleryTunnel
          images={DEFAULT_IMAGES}
          background="#0B0B0D"
          lineColor="#D4AF37"
          lineOpacity={20}
          grid={8}
          speed={40}
          boost={100}
          fade={100}
          label={false}
        />
      </div>

      {/* Smooth radial vignette wash behind text so copy stays readable while 3D images blend naturally */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-[80vh] w-[100vw] wide-lg:w-[50vw] wide-lg:h-[50vh] ipad:w-[75vw] desktop-sm:w-[85vh] desktop-sm:w-[55vw] -translate-x-1/2 -translate-y-1/2 bg-[#0B0B0D] blur-[25px] opacity-80"
      />

      <div className="pointer-events-none relative z-20 flex w-full max-w-[763px] items-center justify-center py-12">
        <div className="pointer-events-auto relative flex w-full items-center justify-center">
          <HeroContent
            onExploreGallery={handleExploreGallery}
            onBookShoot={handleBookShoot}
          />
        </div>
      </div>
    </section>
  );
};
