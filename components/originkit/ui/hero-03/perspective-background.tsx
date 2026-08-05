// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useReducedMotion } from "framer-motion";
import GalleryTunnel from "@/components/originkit/ui/hero-13/gallery-tunnel";

/** Fleet vehicle photos for the 3D perspective tunnel */
const TUNNEL_IMAGES = [
  { src: "/images/fleet/innova-crysta.jpg", alt: "Toyota Innova Crysta" },
  { src: "/images/fleet/innova-hycross.jpg", alt: "Toyota Innova Hycross" },
  { src: "/images/fleet/swift-dzire.jpg", alt: "Swift Dzire" },
  { src: "/images/fleet/kia-carens.jpg", alt: "Kia Carens" },
  { src: "/images/fleet/maruti-ertiga.jpg", alt: "Maruti Ertiga" },
  { src: "/images/fleet/toyota-etios.jpg", alt: "Toyota Etios" },
  { src: "/images/fleet/tempo-traveller.jpg", alt: "Tempo Traveller" },
  { src: "/images/fleet/mini-bus.jpg", alt: "Luxury Mini Bus" },
];

/**
 * Light-theme animated Three.js gallery tunnel.
 * Same speed & grid design as dark theme — warm ivory palette.
 */
export const PerspectiveBackground = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      {/* Same speed/grid/design as dark theme, but warm ivory background & no grid line */}
      <GalleryTunnel
        background="#FAF7F0"
        lineColor="#D4AF37"
        lineOpacity={0}
        grid={6}
        speed={reduceMotion ? 0 : 40}
        boost={80}
        fade={100}
        label={false}
        images={TUNNEL_IMAGES}
      />

      {/* Soft warm radial veil — keeps text readable without hiding the animation */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,247,240,0.70)_0%,rgba(250,247,240,0.40)_45%,transparent_72%)] sm:bg-[radial-gradient(ellipse_at_center,rgba(250,247,240,0.60)_0%,rgba(250,247,240,0.28)_40%,transparent_65%)]" />
    </div>
  );
};
