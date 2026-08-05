import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, ArrowLeft, Lock, FileText } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Kanishka Travels — S. Ramesh',
  description:
    'Privacy policy and data protection terms for Kanishka Travels outstation cab & taxi service in Chennai.',
  path: '/privacy',
});

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/privacy');

  return (
    <>
      <JsonLdScript data={breadcrumbSchema} id="privacy-breadcrumb-schema" />
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
            <span>Privacy & Data Protection</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#A1A1AA]">
            Last updated: March 2026 · Kanishka Travels (Managed by proprietor S. Ramesh)
          </p>
        </div>

        {/* Content Card */}
        <div className="card-editorial p-8 sm:p-12 rounded-3xl space-y-8 text-sm text-[#F8F5EE]/80 leading-relaxed font-sans font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
              1. Information We Collect
            </h2>
            <p>
              When you submit a trip booking request with Kanishka Travels via our website form, phone, or WhatsApp, we collect only the minimal details necessary to arrange your ride:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#A1A1AA]">
              <li>Your Name & Contact Phone Number</li>
              <li>Pickup location, Destination, and travel dates/times</li>
              <li>Vehicle preference and any special travel requirements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D4AF37]" />
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used strictly by proprietor <strong className="text-white">S. Ramesh</strong> to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#A1A1AA]">
              <li>Confirm vehicle availability, assign a driver, and communicate pricing.</li>
              <li>Coordinate pickup times and highway routing for outstation or airport trips.</li>
              <li>Provide customer support during your ride.</li>
            </ul>
            <p className="text-xs text-[#F5D77F] italic font-serif">
              We never sell, rent, or share your personal data with third-party marketers or advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">
              3. Data Security
            </h2>
            <p>
              Booking data stored electronically in our customer portal is secured via encrypted databases and SSL technology. Access is restricted exclusively to proprietor S. Ramesh for booking fulfillment.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#D4AF37]/15 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">
              4. Contact Us
            </h2>
            <p>
              If you have questions regarding this privacy policy or wish to request deletion of your booking records, contact S. Ramesh directly:
            </p>
            <div className="font-mono text-xs text-[#F5D77F] space-y-1 pt-1">
              <p><strong>Phone:</strong> +91 96773 84267 / +91 98845 17451</p>
              <p><strong>Email:</strong> kanishkaoct2011@gmail.com</p>
              <p><strong>Office:</strong> Iyyappanthangal, Chennai, Tamil Nadu – 600056</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
