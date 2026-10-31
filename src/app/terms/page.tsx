import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Scale,
    FileText,
    ShieldAlert,
    CheckCircle2,
    Clock,
    CreditCard,
    Plane,
    MapPin,
    Mail,
    Phone,
    AlertTriangle,
    RefreshCw,
    ArrowUpRight,
    MessageSquare,
    Lock,
    Sparkles,
    CalendarCheck,
    Globe2
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service | Booking & WhatsApp Messaging Terms | Hifaza Travels',
    description: 'Terms of Service and Booking Conditions for Hifaza Travels Calicut. Outlines reservation policies, payments, cancellations, tour guidelines, and official WhatsApp Business API messaging terms.',
    alternates: {
        canonical: 'https://hifazatravels.com/terms',
    },
    openGraph: {
        title: 'Terms of Service | Hifaza Travels',
        description: 'Official Terms of Service, Booking Conditions, and WhatsApp Communication Terms for Hifaza Travels.',
        url: 'https://hifazatravels.com/terms',
        siteName: 'Hifaza Travels',
        locale: 'en_US',
        type: 'website',
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white relative overflow-hidden pt-36 pb-28">
            {/* Background Aesthetic Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#84194f]/15 blur-[150px] rounded-full pointer-events-none -mt-40 animate-pulse" />
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#25D366]/10 blur-[160px] rounded-full pointer-events-none -ml-40" />
            <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#84194f]/10 blur-[180px] rounded-full pointer-events-none -mr-40" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <Scale size={13} className="text-[#84194f]" />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/90">
                            Official Legal Agreement
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-medium">
                        <Clock size={12} />
                        <span>Effective Date: October 31, 2026</span>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="text-center md:text-left mb-16">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84194f] via-[#c42876] to-white">Service</span>
                    </h1>
                    <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed font-normal">
                        Please read these Terms of Service carefully before utilizing the booking services, digital inquiry systems, and <strong className="text-white font-semibold">Meta WhatsApp Business API</strong> messaging platforms operated by <strong className="text-white font-semibold">Hifaza Travels</strong>.
                    </p>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#84194f]/50 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-[#84194f]/20 border border-[#84194f]/40 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                            <CalendarCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Transparent Bookings</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            Clear itemized pricing, transparent tour itineraries, verified hotel categories, and formal booking vouchers for every trip.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#25D366]/40 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-5 group-hover:scale-110 transition-transform">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">WhatsApp Channel Terms</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            Official guidelines governing communications via WhatsApp Business API, automated transactional notifications, and instant &ldquo;STOP&rdquo; opt-outs.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                            <Globe2 size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Pilgrimage &amp; Global Tours</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            Compliant with civil aviation directives, international visa guidelines, and regulations set by the Saudi Ministry of Hajj &amp; Umrah.
                        </p>
                    </div>
                </div>

                {/* Main Content Layout with Navigation Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Table of Contents - Sticky Sidebar */}
                    <aside className="lg:col-span-4 order-2 lg:order-1">
                        <div className="sticky top-28 space-y-6">
                            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                                <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/50 mb-4 flex items-center gap-2">
                                    <FileText size={14} className="text-[#84194f]" /> Quick Navigation
                                </h4>
                                <nav className="space-y-2 text-xs font-medium">
                                    {[
                                        { title: '1. Agreement & Acceptance', id: 'acceptance' },
                                        { title: '2. Travel Agency Services', id: 'services' },
                                        { title: '3. WhatsApp Business API Terms', id: 'whatsapp-terms' },
                                        { title: '4. Booking, Pricing & Payments', id: 'booking-payment' },
                                        { title: '5. Passports, Visas & Health', id: 'visas-health' },
                                        { title: '6. Cancellations, Changes & Refunds', id: 'cancellation-refund' },
                                        { title: '7. Pilgrimage Terms (Hajj & Umrah)', id: 'hajj-umrah' },
                                        { title: '8. User Conduct & Acceptable Use', id: 'acceptable-use' },
                                        { title: '9. Limitation of Liability', id: 'liability' },
                                        { title: '10. Force Majeure & Flight Delays', id: 'force-majeure' },
                                        { title: '11. Intellectual Property', id: 'intellectual-property' },
                                        { title: '12. Governing Law & Dispute Resolution', id: 'governing-law' },
                                        { title: '13. Contact & Inquiries', id: 'contact' },
                                    ].map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Privacy Policy Link Card */}
                            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#84194f]/20 to-transparent border border-[#84194f]/30">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <Lock size={16} className="text-[#84194f]" /> Privacy &amp; Data Rights
                                </h4>
                                <p className="text-white/60 text-xs mb-4 leading-relaxed">
                                    Learn how your personal details and WhatsApp conversation data are handled and protected under our comprehensive policy.
                                </p>
                                <Link
                                    href="/privacy"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#84194f] px-4 py-2.5 rounded-xl hover:bg-white hover:text-[#84194f] transition-all w-full justify-center"
                                >
                                    View Privacy Policy <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Terms Content Sections */}
                    <div className="lg:col-span-8 order-1 lg:order-2 space-y-12">

                        {/* Section 1 */}
                        <section id="acceptance" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">01.</span> Agreement &amp; Acceptance of Terms
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement entered into between you (either individually or on behalf of travel parties for whom you book) and <strong className="text-white">Hifaza Travels</strong> (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered and operating in Kozhikode (Calicut), Kerala, India (PIN: 673001).
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                By accessing our website (<Link href="/" className="text-[#25D366] underline underline-offset-4">https://hifazatravels.com</Link>), engaging with us via the official <strong className="text-white">Meta WhatsApp Business API</strong>, requesting quotes, or executing travel bookings, you acknowledge that you have read, understood, and irrevocably agree to be bound by these Terms and our <Link href="/privacy" className="text-[#25D366] underline underline-offset-4">Privacy Policy</Link>.
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed">
                                If you do not agree with any part of these Terms, you must immediately refrain from utilizing our services and interactive messaging channels.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section id="services" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">02.</span> Travel Agency Services &amp; Scope
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Hifaza Travels operates as an authorized travel consultant, tour operator, and booking facilitator providing:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70 mb-4">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Domestic &amp; Kerala Holiday Packages:</strong>
                                    Curated leisure tours across Wayanad, Munnar, Thekkady, Alleppey houseboats, and South India.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Spiritual Pilgrimages (Hajj &amp; Umrah):</strong>
                                    Accredited Umrah packages, group departures, Makkah &amp; Madinah hotel lodging, and Ziyarat transfers.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Airline Ticketing:</strong>
                                    Domestic and international scheduled flight reservations via global distribution systems (GDS).
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Visa &amp; Travel Assistance:</strong>
                                    Tourist visa facilitation, hotel booking vouchers, airport transfers, and travel insurance assistance.
                                </div>
                            </div>
                            <p className="text-white/60 text-xs leading-relaxed">
                                <em>Intermediary Disclaimer:</em> While we rigorously select reputable airlines, transport companies, and hotels, Hifaza Travels acts as an agent and facilitator for third-party service providers and is not the direct carrier, airline, or hotelier.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section id="whatsapp-terms" className="p-8 rounded-3xl bg-gradient-to-br from-[#25D366]/10 via-transparent to-transparent border border-[#25D366]/20 scroll-mt-28">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white tracking-tight">
                                        03. WhatsApp Business API Terms &amp; Communication
                                    </h2>
                                    <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Meta Platform Messaging Conditions</p>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                We utilize the official <strong className="text-white">Meta WhatsApp Business API</strong> through our verified telephone number <strong>+91 80892 96162</strong> (and associated support numbers +91 73061 09985, +91 93834 91478) to provide enhanced customer service.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <h4 className="text-white font-bold text-sm mb-1">Opt-In Consent for Messaging</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        By contacting us via WhatsApp, submitting a booking form, or requesting an itinerary, you provide explicit consent to receive service-related WhatsApp messages, including quotes, itinerary schedules, flight status alerts, and e-tickets.
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <h4 className="text-white font-bold text-sm mb-1">Opt-Out &ldquo;STOP&rdquo; Mechanism</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        You may withdraw consent to non-essential automated or promotional WhatsApp messages at any time by replying with <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">STOP</code>, <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">UNSUBSCRIBE</code>, or <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">CANCEL</code>.
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <h4 className="text-white font-bold text-sm mb-1">Transmission Security &amp; Meta Disclaimer</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        Communications through WhatsApp are subject to the policies of Meta Platforms, Inc. Hifaza Travels cannot be held liable for temporary WhatsApp network outages, telecom carrier filtering, or handset delivery delays beyond our control.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="booking-payment" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">04.</span> Booking Process, Pricing &amp; Payments
                            </h2>
                            <ul className="list-disc pl-5 space-y-3 text-white/70 text-sm mb-6">
                                <li><strong>Quotation Validity:</strong> All prices quoted for airfares, holiday packages, and Umrah itineraries are subject to seat and hotel room availability at the time of final confirmation. Prices are subject to revision until a formal booking confirmation receipt is generated.</li>
                                <li><strong>Booking Deposit:</strong> A non-refundable advance deposit (as specified in your personalized booking dossier) is required to secure flights, hotel allotments, and private vehicle bookings.</li>
                                <li><strong>Full Payment Deadlines:</strong> The complete package balance must be settled at least 15 days prior to domestic departures and 25 days prior to international or Umrah departures, unless otherwise explicitly stipulated in writing.</li>
                                <li><strong>Taxes &amp; Statutory Levies:</strong> Stated prices include applicable Goods and Services Tax (GST) unless indicated as exclusive. Any subsequent increase in statutory airport taxes, fuel surcharges, or foreign currency exchange fluctuation may be billed prior to ticketing.</li>
                                <li><strong>Accepted Payment Methods:</strong> Payments must be remitted strictly through official bank transfers (NEFT/RTGS/IMPS), UPI to registered Hifaza Travels accounts, or authorized payment gateway links. <em>We never solicit cash payments to personal staff accounts.</em></li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section id="visas-health" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">05.</span> Passports, Visas, Health &amp; Travel Documentation
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Travelers bear the ultimate personal responsibility for ensuring all necessary identification and compliance prerequisites are fulfilled:
                            </p>
                            <div className="space-y-3 text-xs">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Passport Validity:</strong> For all international journeys and Umrah departures, passports must have a minimum validity of six (6) months from the intended date of return, with at least two blank visa pages.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Visa Approval Discretion:</strong> Hifaza Travels assists in filing visa applications and submitting documents through authorized portals. However, the granting or rejection of any visa rests entirely within the sovereign discretion of the respective embassy, consulate, or the Ministry of Foreign Affairs. Visa application fees and processing charges are strictly non-refundable.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Health &amp; Mandatory Vaccinations:</strong> Pilgrims and overseas travelers must obtain mandatory vaccinations (such as Meningitis ACWY for Umrah/Hajj, COVID-19 certificates, or polio drops where applicable) as mandated by destination health ministries.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id="cancellation-refund" className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">06.</span> Cancellations, Modifications &amp; Refund Policy
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                If you need to cancel or alter a confirmed booking, the request must be transmitted in writing via email to <a href="mailto:hifazatravels@gmail.com" className="text-white underline">hifazatravels@gmail.com</a> from the registered email address.
                            </p>

                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <th className="p-3 font-bold text-white uppercase tracking-wider">Cancellation Notice Received</th>
                                            <th className="p-3 font-bold text-white uppercase tracking-wider">Cancellation Charge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-white/70">
                                        <tr>
                                            <td className="p-3">30 or more days prior to departure</td>
                                            <td className="p-3 text-white">Non-refundable booking deposit + actual airline/hotel penalties</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">29 to 15 days prior to departure</td>
                                            <td className="p-3 text-white">50% of total tour package cost</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">14 to 7 days prior to departure</td>
                                            <td className="p-3 text-white">75% of total tour package cost</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Less than 7 days prior or &ldquo;No Show&rdquo;</td>
                                            <td className="p-3 text-[#c42876] font-bold">100% of package cost (No Refund)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-2">
                                <p><strong>Non-Refundable Elements:</strong> Airline group tickets, peak season holiday surcharges, issued Umrah visas, and non-refundable hotel allotments cannot be refunded regardless of the cancellation date.</p>
                                <p><strong>Refund Processing:</strong> Approved refunds are credited to the original payment method within 14 to 21 banking days following final reconciliation with supplier airlines and properties.</p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section id="hajj-umrah" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">07.</span> Special Terms for Hajj &amp; Umrah Pilgrimages
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Due to the sacred and highly regulated nature of spiritual pilgrimages in Saudi Arabia, the following terms apply:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                                <li><strong>Nusuk Portal &amp; Regulatory Compliance:</strong> Pilgrims must adhere strictly to the rules, entry slots (Rawdah permits), and guidelines issued by the Saudi Ministry of Hajj &amp; Umrah and the Nusuk application.</li>
                                <li><strong>Hotel Distances &amp; Views:</strong> Distance estimations from the Haram in Makkah and the Prophet&apos;s Mosque in Madinah are measured in approximate meters. Room allotments (quad, triple, double) follow hotel policies.</li>
                                <li><strong>Code of Conduct:</strong> Pilgrims agree to uphold Islamic decorum, respect fellow travelers and group leaders, and comply with Kingdom regulations at all times.</li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section id="acceptable-use" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">08.</span> User Conduct &amp; Acceptable Messaging Use
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                When using our website or communicating with our team on WhatsApp, you agree not to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                                <li>Send abusive, defamatory, harassing, sexually explicit, or threatening language to our customer care personnel or fellow travelers.</li>
                                <li>Attempt to impersonate another individual, forge passport documents, or supply falsified identification details.</li>
                                <li>Use automated scripts or bots to spam our official WhatsApp Business API line.</li>
                                <li>Circumvent or attempt to compromise security protocols across our digital platforms.</li>
                            </ul>
                            <p className="text-white/50 text-xs mt-4">
                                Breach of user conduct terms may lead to immediate termination of communication and cancellation of travel bookings without refund.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section id="liability" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">09.</span> Limitation of Liability
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                To the maximum extent permitted by applicable Indian laws:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm mb-4">
                                <li>Hifaza Travels shall not be held liable for any indirect, incidental, punitive, or consequential damages arising out of personal injury, baggage loss, theft, airline equipment failure, or customs detentions during your travel.</li>
                                <li>Our total aggregate financial liability for any proven claim related to a booking shall not exceed the net service fee retained by Hifaza Travels for that specific reservation.</li>
                                <li>Travelers are strongly advised to purchase comprehensive overseas travel, baggage, and medical insurance before undertaking any journey.</li>
                            </ul>
                        </section>

                        {/* Section 10 */}
                        <section id="force-majeure" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">10.</span> Force Majeure &amp; Extraordinary Circumstances
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Hifaza Travels will not be held in breach of these Terms or liable for travel disruptions, rescheduling, or cancellations resulting from events beyond reasonable control (&ldquo;Force Majeure&rdquo;), including but not limited to: acts of God, extreme weather events, earthquakes, floods, epidemics, pandemic containment measures, flight groundings, air traffic control strikes, civil unrest, war, border closures, or emergency government directives. In such scenarios, we will exert reasonable efforts to secure supplier credits or date amendments.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section id="intellectual-property" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">11.</span> Intellectual Property Rights
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                All logos, trademarks, website layout, itineraries, brand names (&ldquo;Hifaza Travels&rdquo;, &ldquo;Hifaza Tour Packages&rdquo;), imagery, and software code are the intellectual property of Hifaza Travels or its licensors. Reproduction, distribution, or unauthorized commercial exploitation without written consent is strictly prohibited.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section id="governing-law" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">12.</span> Governing Law &amp; Dispute Resolution
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                These Terms shall be governed by, construed, and enforced exclusively in accordance with the laws of the <strong className="text-white">Republic of India</strong>.
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Any dispute, claim, or controversy arising out of or in connection with our services or these Terms shall be subject to the exclusive jurisdiction of the competent civil courts situated in <strong className="text-white">Kozhikode (Calicut), Kerala, India</strong>.
                            </p>
                        </section>

                        {/* Section 13 */}
                        <section id="contact" className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 scroll-mt-28 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">13.</span> Legal Desk &amp; Contact Information
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                For inquiries, clarifications regarding these Terms of Service, or contractual questions, please reach our administrative office:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#84194f]/20 border border-[#84194f]/30 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Main Headquarters</span>
                                            <p className="text-white text-sm font-semibold">Hifaza Travels</p>
                                            <p className="text-white/60 text-xs">Calicut (Kozhikode), Kerala, India - 673001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#84194f]/20 border border-[#84194f]/30 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Official Email</span>
                                            <a href="mailto:hifazatravels@gmail.com" className="text-white text-sm font-semibold hover:text-[#25D366] transition-colors">
                                                hifazatravels@gmail.com
                                            </a>
                                            <p className="text-white/40 text-[11px]">Subject: Terms &amp; Legal Desk</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                                            <MessageSquare size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Official WhatsApp Business API</span>
                                            <a href="https://wa.me/918089296162" target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm font-bold hover:underline">
                                                +91 80892 96162
                                            </a>
                                            <p className="text-white/40 text-[11px]">Primary Business Messaging Channel</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Support Hotlines</span>
                                            <p className="text-white text-sm font-semibold">+91 73061 09985 / +91 93834 91478</p>
                                            <p className="text-white/40 text-[11px]">Monday to Saturday (09:00 AM - 06:00 PM IST)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
                                <span>Agreement Version: 2.1 (WhatsApp Business API Integrated)</span>
                                <span>Jurisdiction: Kozhikode (Calicut), Kerala, India</span>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#84194f]/20 via-white/5 to-[#25D366]/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Ready to book your next journey?</h3>
                        <p className="text-white/60 text-xs md:text-sm">
                            Reach out to our Calicut team for customized itineraries, spiritual packages, and flight bookings.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
                        >
                            Contact Desk
                        </Link>
                        <a
                            href="https://wa.me/918089296162"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 inline-flex items-center gap-2"
                        >
                            <MessageSquare size={14} /> WhatsApp Us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

