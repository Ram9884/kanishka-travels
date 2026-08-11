import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, ArrowLeft, CheckCircle2, Car } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service | Kanishka Travels — S. Ramesh',
  description:
    'Terms of service, booking policies, and travel guidelines for Kanishka Travels in Chennai.',
  path: '/terms',
});

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/terms');

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} id="terms-breadcrumb-schema" />
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D77F] text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Terms & Conditions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#A1A1AA]">
            Last updated: March 2026 · Kanishka Travels (Managed by proprietor S. Ramesh)
          </p>
        </div>

        {/* Content Card */}
        <div className="card-editorial p-8 sm:p-12 rounded-3xl space-y-8 text-sm text-[#F8F5EE]/80 leading-relaxed font-sans font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              1. Zero Advance Payment Guarantee
            </h2>
            <p>
              At Kanishka Travels, we operate on mutual personal trust. For standard local and outstation bookings, zero advance payment is required to confirm your reservation. Trip fare is settled directly with S. Ramesh or the driver upon ride completion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <Car className="w-5 h-5 text-[#D4AF37]" />
              2. Outstation Trips & Toll Terms
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[#A1A1AA]">
              <li>Outstation trips are calculated on a round-trip basis from Chennai unless explicitly specified otherwise.</li>
              <li>Km charges, driver bata, state entry permits, and highway tolls are communicated transparently upfront before departure.</li>
              <li>Extra kilometers beyond the agreed package distance will be charged at the per-km rate specified for your vehicle category.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">
              3. Passenger Safety & Vehicle Maintenance
            </h2>
            <p>
              All vehicles in our fleet (Dzire, Ertiga, Etios, Innova Crysta, Tempo Traveller) undergo regular mechanical inspection and sanitization before departure. Passengers are expected to comply with seatbelt safety standards and highway regulations.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#D4AF37]/15 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">
              4. Cancellations & Support
            </h2>
            <p>
              We understand travel plans change. If you need to modify or cancel your booking, please notify proprietor S. Ramesh directly via call or WhatsApp as early as possible so driver schedules can be adjusted.
            </p>
            <div className="font-mono text-xs text-[#F5D77F] space-y-1 pt-1">
              <p><strong>Proprietor:</strong> S. Ramesh</p>
              <p><strong>Primary Phone:</strong> +91 96773 84267</p>
              <p><strong>Office:</strong> Iyyappanthangal, Chennai, Tamil Nadu – 600056</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
