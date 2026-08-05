import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ROUTES_DATA } from '@/data/routes';
import { generatePageMetadata } from '@/lib/seo';
import {
  getBreadcrumbSchema,
  getFAQPageSchema,
  getServiceSchema,
} from '@/lib/jsonld';
import JsonLdScript from '@/components/JsonLdScript';
import GlassCard from '@/components/ui/GlassCard';
import CallButton from '@/components/CallButton';
import WhatsAppButton from '@/components/WhatsAppButton';

interface RoutePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(ROUTES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = ROUTES_DATA[slug];

  if (!route) {
    return generatePageMetadata({
      title: 'Route Not Found',
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: route.title,
    description: route.description,
    path: `/routes/${route.slug}`,
    keywords: [
      `${route.origin} to ${route.destination} cab`,
      `${route.origin} to ${route.destination} taxi`,
      `Innova crysta ${route.origin} to ${route.destination}`,
      `outstation taxi ${route.origin}`,
      `Kanishka Travels ${route.destination}`,
    ],
  });
}

export default async function RouteDetailPage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = ROUTES_DATA[slug];

  if (!route) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema(`/routes/${route.slug}`);
  const faqSchema = getFAQPageSchema(route.faqs.map((f, i) => ({ id: `rf-${i}`, category: 'Booking', ...f })));
  const serviceSchema = getServiceSchema({
    name: route.title,
    description: route.description,
    serviceType: `Outstation Taxi - ${route.origin} to ${route.destination}`,
  });

  return (
    <>
      <JsonLdScript data={[breadcrumbSchema, faqSchema, serviceSchema]} id="route-schema" />
      <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-amber-400 transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-amber-400 font-medium truncate">{route.origin} to {route.destination}</li>
          </ol>
        </nav>

        {/* Hero Banner Section */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-12 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4">
              Premier Travel Route
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              {route.title}
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {route.longDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block font-mono uppercase tracking-wider">Distance</span>
                <span className="text-xl font-bold text-amber-400">{route.distance}</span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block font-mono uppercase tracking-wider">Est. Duration</span>
                <span className="text-xl font-bold text-amber-400">{route.duration}</span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-400 block font-mono uppercase tracking-wider">Guarantee</span>
                <span className="text-sm font-bold text-emerald-400">Zero Advance</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/book?route=${route.slug}`}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg transition duration-200"
              >
                Book This Route Now
              </Link>
              <WhatsAppButton message={`Hi Ramesh sir, I need a cab from ${route.origin} to ${route.destination}.`} />
              <CallButton />
            </div>
          </div>
        </div>

        {/* Route Highlights & Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Kanishka Travels for {route.origin} to {route.destination}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {route.routeHighlights.map((highlight, idx) => (
              <GlassCard key={idx} className="p-5 flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </span>
                <span className="text-slate-200 text-base">{highlight}</span>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Available Fleet Options for This Route</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {route.vehicleOptions.map((v, i) => (
              <GlassCard key={i} className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase text-amber-400 tracking-wide">{v.type}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{v.name}</h3>
                  <p className="text-sm text-slate-300 mb-2 font-medium">{v.capacity}</p>
                  <p className="text-xs text-slate-400 mb-4">{v.features}</p>
                </div>
                <div className="border-t border-slate-800/80 pt-4 mt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Zero Advance</span>
                  <Link
                    href={`/book?route=${route.slug}&vehicle=${encodeURIComponent(v.name)}`}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                  >
                    Select Vehicle →
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        {route.faqs && route.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {route.faqs.map((faq, i) => (
                <GlassCard key={i} className="p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">{faq.question}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
