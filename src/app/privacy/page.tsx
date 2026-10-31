import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ShieldCheck,
    Lock,
    MessageSquare,
    CheckCircle2,
    Trash2,
    BellOff,
    FileText,
    Mail,
    Phone,
    MapPin,
    AlertCircle,
    ArrowUpRight,
    Sparkles,
    Clock,
    UserCheck,
    HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Meta WhatsApp Business API Compliance | Hifaza Travels',
    description: 'Official Privacy Policy of Hifaza Travels Calicut. Outlines our data collection, usage, and protection practices in full compliance with Meta WhatsApp Business API policies, Meta Platform Terms, and the Indian Digital Personal Data Protection Act (DPDPA).',
    alternates: {
        canonical: 'https://hifazatravels.com/privacy',
    },
    openGraph: {
        title: 'Privacy Policy | Hifaza Travels',
        description: 'Comprehensive Privacy Policy and WhatsApp Business API compliance guidelines for Hifaza Travels.',
        url: 'https://hifazatravels.com/privacy',
        siteName: 'Hifaza Travels',
        locale: 'en_US',
        type: 'website',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white relative overflow-hidden pt-36 pb-28">
            {/* Background Aesthetic Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#84194f]/15 blur-[150px] rounded-full pointer-events-none -mt-40 animate-pulse" />
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#25D366]/10 blur-[160px] rounded-full pointer-events-none -ml-40" />
            <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#84194f]/10 blur-[180px] rounded-full pointer-events-none -mr-40" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

                {/* Breadcrumb / Top Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#25D366]">
                            Meta WhatsApp Business API Compliant
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-medium">
                        <Clock size={12} />
                        <span>Last Updated: October 31, 2026</span>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="text-center md:text-left mb-16">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84194f] via-[#c42876] to-white">Policy</span>
                    </h1>
                    <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed font-normal">
                        At <strong className="text-white font-semibold">Hifaza Travels</strong>, we are deeply committed to protecting your privacy, securing your personal data, and maintaining complete transparency regarding how your information is handled, especially across our <strong className="text-white font-semibold">Meta WhatsApp Business API</strong> messaging services and digital booking platforms.
                    </p>
                </div>

                {/* Key Meta Compliance Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#25D366]/40 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-5 group-hover:scale-110 transition-transform">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">WhatsApp Business API</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            Official messaging channel powered by Meta Platforms, Inc. Used exclusively for opt-in inquiries, bookings, itinerary confirmations, and travel updates.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#84194f]/50 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-[#84194f]/20 border border-[#84194f]/40 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Zero Data Selling</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            We never sell, rent, monetize, or broker your personal phone numbers, chat transcripts, or travel documentation to third-party advertisers.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                            <Trash2 size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Data Deletion Rights</h3>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                            Full control over your data. Easily request total erasure of your contact details, chat logs, and records at any time with prompt processing.
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
                                        { title: '1. Identification & Scope', id: 'scope' },
                                        { title: '2. Data Collected via WhatsApp', id: 'data-collected' },
                                        { title: '3. Purposes of Processing', id: 'purposes' },
                                        { title: '4. Opt-In & Consent Policy', id: 'opt-in' },
                                        { title: '5. Opt-Out ("STOP" Mechanism)', id: 'opt-out' },
                                        { title: '6. User Data Deletion Instructions', id: 'data-deletion' },
                                        { title: '7. Meta Platform Disclosure', id: 'meta-disclosure' },
                                        { title: '8. Third-Party Disclosures', id: 'third-parties' },
                                        { title: '9. Data Security & Retention', id: 'security-retention' },
                                        { title: '10. Your Rights (DPDPA & GDPR)', id: 'user-rights' },
                                        { title: '11. Children\'s Privacy', id: 'children' },
                                        { title: '12. Grievance Officer & Contact', id: 'grievance-contact' },
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

                            {/* Need Assistance Card */}
                            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#84194f]/20 to-transparent border border-[#84194f]/30">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <Sparkles size={16} className="text-[#84194f]" /> Privacy Inquiries
                                </h4>
                                <p className="text-white/60 text-xs mb-4 leading-relaxed">
                                    Have questions regarding your personal information or WhatsApp interaction logs? Reach our Data Protection Team directly.
                                </p>
                                <a
                                    href="mailto:hifazatravels@gmail.com?subject=Privacy%20Inquiry%20-%20Hifaza%20Travels"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#84194f] px-4 py-2.5 rounded-xl hover:bg-white hover:text-[#84194f] transition-all w-full justify-center"
                                >
                                    <Mail size={14} /> Email Privacy Team
                                </a>
                            </div>

                            {/* Meta Reviewer Quick Checklist */}
                            <div className="p-6 rounded-3xl bg-white/[0.03] border border-[#25D366]/30">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#25D366] mb-3 flex items-center gap-2">
                                    <ShieldCheck size={14} /> Meta Reviewer Info
                                </h4>
                                <ul className="text-white/70 text-xs space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">✓</span>
                                        <span>Publicly accessible without login</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">✓</span>
                                        <span>Explicit WhatsApp API data disclosure</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">✓</span>
                                        <span>Actionable Data Deletion procedure</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">✓</span>
                                        <span>Direct &ldquo;STOP&rdquo; opt-out mechanism</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Policy Content Sections */}
                    <div className="lg:col-span-8 order-1 lg:order-2 space-y-12">

                        {/* Section 1 */}
                        <section id="scope" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">01.</span> Identification of Business &amp; Scope
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                This Privacy Policy is issued by <strong className="text-white">Hifaza Travels</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a premier travel agency operating from Kozhikode (Calicut), Kerala, India (PIN: 673001), accessible online via <Link href="/" className="text-[#25D366] underline underline-offset-4">https://hifazatravels.com</Link>.
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                This policy governs the processing, retention, and handling of personal data collected through:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                                <li>Our website and digital inquiry portals (<Link href="/" className="text-white hover:underline">hifazatravels.com</Link>).</li>
                                <li>Our official <strong className="text-white">WhatsApp Business Platform (Meta WhatsApp Business API)</strong> communications via our registered telephone numbers: <strong>+91 80892 96162</strong>, <strong>+91 73061 09985</strong>, and <strong>+91 93834 91478</strong>.</li>
                                <li>Direct telephone, electronic mail, and in-person travel consultations for booking Kerala tour packages, international holidays, flight ticketing, and Hajj &amp; Umrah pilgrimages.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section id="data-collected" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">02.</span> Information We Collect via WhatsApp &amp; Digital Channels
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                In accordance with Meta developer guidelines and applicable data protection legislation, we only collect data that is strictly necessary to fulfill your travel inquiries, issue travel documentation, and offer seamless customer support.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#25D366]" /> WhatsApp Profile &amp; Contact Data
                                    </h3>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        Your mobile phone number linked to WhatsApp, public WhatsApp profile display name, and status information provided via your WhatsApp client during interactions.
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#25D366]" /> Communication Content &amp; Inquiries
                                    </h3>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        The contents of messages, voice notes, photos, and files you send to us requesting travel packages (such as Kerala tours, Wayanad excursions, Munnar stays, Umrah packages, flight availability, and hotel inquiries).
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#25D366]" /> Booking &amp; Identification Documentation
                                    </h3>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        When you proceed with a formal booking, we may collect passenger full names, date of birth, passport copies, visa information, government-issued IDs, and emergency contact details necessary for flight ticketing, Saudi Ministry of Hajj &amp; Umrah portal submissions, or hotel registration.
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#25D366]" /> Technical &amp; Transmission Metadata
                                    </h3>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        Message delivery status, read receipts, timestamps, message unique identifiers, and server logging data generated automatically by Meta&apos;s WhatsApp Cloud API infrastructure.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="purposes" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">03.</span> Purposes of Processing WhatsApp Data
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                We utilize the data gathered through the WhatsApp Business API strictly for lawful, legitimate, and declared travel facilitation purposes:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <span className="font-bold text-white block mb-1">Customer Support &amp; Queries</span>
                                    Responding to travel inquiries, customized itinerary requests, and price quotations.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <span className="font-bold text-white block mb-1">Transactional Notifications</span>
                                    Sending flight e-tickets, hotel booking vouchers, Umrah package confirmations, and invoice receipts.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <span className="font-bold text-white block mb-1">Critical Travel Alerts</span>
                                    Notifying passengers about flight schedule changes, gate updates, visa processing progress, or emergency travel advisories.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <span className="font-bold text-white block mb-1">Opt-In Promotional Messages</span>
                                    Sharing seasonal discounts and new holiday departures <em>solely</em> when prior explicit consent has been granted.
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="opt-in" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">04.</span> WhatsApp Opt-In &amp; Consent Policy
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                In strict adherence to Meta&apos;s WhatsApp Business Messaging Policy, Hifaza Travels ensures that all outbound messages sent via the WhatsApp API comply with opt-in guidelines:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm mb-4">
                                <li><strong>User-Initiated Inquiries:</strong> When you initiate contact with us by tapping our WhatsApp link, scanning a QR code, or sending a direct message to our business number, you consent to receiving responses concerning your specific travel query.</li>
                                <li><strong>Website Form Submissions:</strong> When you submit an inquiry form on our website requesting travel packages, you are explicitly informed that an advisor will contact you via WhatsApp or phone.</li>
                                <li><strong>No Cold Messaging / Spam:</strong> We do not purchase contact databases or send unsolicited bulk promotional broadcasts to individuals who have not requested information from Hifaza Travels.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section id="opt-out" className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 scroll-mt-28">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                                    <BellOff size={20} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white tracking-tight">
                                        05. How to Opt-Out (WhatsApp &ldquo;STOP&rdquo; Mechanism)
                                    </h2>
                                    <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Instant Revocation of Messaging Consent</p>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                You hold the absolute right to revoke consent and stop receiving WhatsApp messages from Hifaza Travels at any time. We provide multiple frictionless methods:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-5 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366] block mb-2">Method 1 (Instant In-Chat)</span>
                                    <h4 className="text-white font-bold text-sm mb-2">Reply with &ldquo;STOP&rdquo; in WhatsApp</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        Simply reply to any message from our business number with the single word: <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">STOP</code>, <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">UNSUBSCRIBE</code>, or <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">CANCEL</code>.
                                    </p>
                                    <p className="text-white/40 text-[11px] mt-2">
                                        Our automated system immediately marks your profile as opted out from non-transactional messages.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#84194f] block mb-2">Method 2 (Support Request)</span>
                                    <h4 className="text-white font-bold text-sm mb-2">Email or Call Our Desk</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">
                                        Email us at <a href="mailto:hifazatravels@gmail.com" className="text-white underline">hifazatravels@gmail.com</a> with the subject line <em>&ldquo;WhatsApp Opt-Out Request&rdquo;</em> including your mobile phone number, or call <a href="tel:+918089296162" className="text-white underline">+91 80892 96162</a>.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                                <AlertCircle size={18} className="text-[#25D366] shrink-0 mt-0.5" />
                                <p className="text-white/60 text-xs leading-relaxed">
                                    <strong>Please Note:</strong> If you have an active flight booking or pending visa application with us, critical transactional updates (e.g., flight cancellations or gate changes) may still be delivered by our operations agents to guarantee your travel safety, unless you specifically ask us to delete all records.
                                </p>
                            </div>
                        </section>

                        {/* Section 6 - User Data Deletion Instructions (MANDATORY FOR META) */}
                        <section id="data-deletion" className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-transparent border border-red-500/20 scroll-mt-28">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                                    <Trash2 size={20} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white tracking-tight">
                                        06. User Data Deletion Instructions
                                    </h2>
                                    <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Meta App Review &amp; Compliance Mandate</p>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                In accordance with Meta Platform terms and international data privacy regulations (including India&apos;s Digital Personal Data Protection Act and GDPR), users have the absolute right to request the permanent deletion of their data collected through our WhatsApp Business API integration or website.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <span className="w-7 h-7 rounded-xl bg-white/10 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Submit Your Deletion Request</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Send an email to our Privacy Officer at <a href="mailto:hifazatravels@gmail.com?subject=Data%20Deletion%20Request%20-%20Meta%20WhatsApp%20API" className="text-white underline font-semibold">hifazatravels@gmail.com</a> with the subject: <br />
                                            <code className="text-[#84194f] bg-white/5 px-2 py-0.5 rounded font-mono font-bold mt-1 inline-block">Data Deletion Request - WhatsApp API</code>
                                            <br />Alternatively, send a WhatsApp message to <strong>+91 80892 96162</strong> containing the text <code className="text-[#25D366] bg-white/5 px-2 py-0.5 rounded font-mono font-bold">DELETE MY DATA</code>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <span className="w-7 h-7 rounded-xl bg-white/10 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Provide Required Verification Details</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            To prevent fraudulent deletion requests, include:
                                        </p>
                                        <ul className="list-disc pl-5 text-white/60 text-xs space-y-1 mt-1">
                                            <li>Your full legal name</li>
                                            <li>Your registered WhatsApp phone number (with country code, e.g., +91...)</li>
                                            <li>Approximate date of your recent booking or inquiry (optional, helps locate records)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a0a1a] border border-white/10">
                                    <span className="w-7 h-7 rounded-xl bg-white/10 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">Processing Timeline &amp; Confirmation</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Our data protection desk acknowledges receipt within <strong>48 hours</strong>. Your contact profile, WhatsApp chat history, and uploaded attachments will be permanently deleted from our active customer databases within <strong>30 calendar days</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Legal Exceptions to Deletion</h4>
                                <p className="text-white/50 text-xs leading-relaxed">
                                    Under Indian tax, aviation, and statutory audit laws, certain financial records (tax invoices, GST filings, and issued airline ticket logs) must be retained for the minimum period prescribed by the Government of India before final archival destruction.
                                </p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section id="meta-disclosure" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">07.</span> Meta Platform &amp; Cloud Infrastructure Disclosure
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Our WhatsApp messaging services are powered by <strong className="text-white">Meta Platforms, Inc.</strong> through the official <strong className="text-white">WhatsApp Business Platform / WhatsApp Cloud API</strong>.
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                By conversing with Hifaza Travels over WhatsApp, you recognize that transmission and processing of messages adhere to Meta&apos;s security architecture:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm mb-6">
                                <li>WhatsApp messages sent between your device and the WhatsApp Business API are encrypted in transit using industry-standard Transport Layer Security (TLS).</li>
                                <li>Meta processes message data as a data processor on our behalf, in compliance with the <a href="https://www.whatsapp.com/legal/business-data-processing-terms" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline inline-flex items-center gap-1">WhatsApp Business Data Processing Terms <ArrowUpRight size={12} /></a> and the <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline inline-flex items-center gap-1">WhatsApp Privacy Policy <ArrowUpRight size={12} /></a>.</li>
                                <li>Hifaza Travels does not control Meta&apos;s internal server hosting or data routing infrastructure.</li>
                            </ul>

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-[#25D366]" /> Strict Anti-Monetization Pledge
                                </h4>
                                <p className="text-white/60 text-xs leading-relaxed">
                                    We solemnly pledge that <strong>Hifaza Travels does NOT sell, rent, monetize, or trade your personal data, phone numbers, or WhatsApp chat logs</strong> to third-party data brokers, telemarketers, or commercial ad networks.
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section id="third-parties" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">08.</span> Third-Party Service Providers &amp; Subprocessors
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                To complete travel reservations and issue official documentation, relevant personal details may be shared with authorized third parties solely on a need-to-know basis:
                            </p>
                            <div className="space-y-3 text-xs">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Airlines &amp; Global Distribution Systems (GDS):</strong> To issue tickets, manage seat allocations, and fulfill passenger name records (Amadeus, Sabre, Air India, IndiGo, Saudia, Emirates, etc.).
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Pilgrimage &amp; Visa Regulatory Authorities:</strong> The Ministry of Hajj &amp; Umrah (Kingdom of Saudi Arabia), accredited visa processing agents, and consular authorities for entry clearance.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Hotel &amp; Transport Vendors:</strong> Partner resorts, hotels in Kerala and international destinations, and local luxury coach operators for group tours.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#84194f] mt-1.5 shrink-0" />
                                    <p className="text-white/70">
                                        <strong className="text-white">Payment Gateways &amp; Banking Partners:</strong> Regulated payment processors for processing travel deposits and payments securely (we do not store full card numbers).
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section id="security-retention" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">09.</span> Data Security &amp; Retention
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                We employ robust technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm mb-6">
                                <li><strong>Access Controls:</strong> Travel consultant access to customer records is restricted based on role necessity and multi-factor authentication.</li>
                                <li><strong>Encrypted Communications:</strong> All web communication uses HTTPS (SSL/TLS), and WhatsApp messaging follows Meta&apos;s secure cloud APIs.</li>
                                <li><strong>Retention Window:</strong> Routine WhatsApp inquiry chats that do not result in a confirmed booking are purged every 180 days. Confirmed travel booking dossiers are retained for the statutory period mandated by Indian tax and accounting authorities.</li>
                            </ul>
                        </section>

                        {/* Section 10 */}
                        <section id="user-rights" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">10.</span> Your Rights (Indian DPDPA 2023 &amp; GDPR)
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                Under India&apos;s Digital Personal Data Protection Act, 2023 (DPDPA), the General Data Protection Regulation (GDPR), and related frameworks, you hold the following rights:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Right to Access:</strong>
                                    Request a summary of your personal data and processing activities.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Right to Correction:</strong>
                                    Request correction of inaccurate, outdated, or incomplete information.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Right to Erasure:</strong>
                                    Request deletion of your data as detailed in Section 06.
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <strong className="text-white block mb-1">Right to Grievance Redressal:</strong>
                                    Lodge a complaint with our Grievance Officer if you believe your privacy rights have been infringed.
                                </div>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section id="children" className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 scroll-mt-28">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">11.</span> Children&apos;s Privacy
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Our digital platforms and WhatsApp Business channels are directed towards adults aged 18 and over. We do not knowingly collect personal information directly from minors. When children travel as part of family tour packages or pilgrimages, necessary booking details (such as passport copies and names) are collected solely from the accompanying parent or legal guardian.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section id="grievance-contact" className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 scroll-mt-28 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                                <span className="text-[#84194f]">12.</span> Grievance Officer &amp; Contact Information
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                In compliance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer are provided below:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#84194f]/20 border border-[#84194f]/30 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Office Address</span>
                                            <p className="text-white text-sm font-semibold">Hifaza Travels</p>
                                            <p className="text-white/60 text-xs">Calicut (Kozhikode), Kerala, India - 673001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#84194f]/20 border border-[#84194f]/30 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Privacy Desk Email</span>
                                            <a href="mailto:hifazatravels@gmail.com" className="text-white text-sm font-semibold hover:text-[#25D366] transition-colors">
                                                hifazatravels@gmail.com
                                            </a>
                                            <p className="text-white/40 text-[11px]">Subject line: Attention: Grievance Officer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                                            <MessageSquare size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Official WhatsApp API Line</span>
                                            <a href="https://wa.me/918089296162" target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm font-bold hover:underline">
                                                +91 80892 96162
                                            </a>
                                            <p className="text-white/40 text-[11px]">Primary Business WhatsApp Account</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block font-bold">Desk Phone Support</span>
                                            <p className="text-white text-sm font-semibold">+91 73061 09985 / +91 93834 91478</p>
                                            <p className="text-white/40 text-[11px]">Monday to Saturday (09:00 AM - 06:00 PM IST)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
                                <span>Policy Version: 2.1 (Meta WhatsApp API Compliant)</span>
                                <span>Jurisdiction: Kozhikode (Calicut), Kerala, India</span>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#84194f]/20 via-white/5 to-[#25D366]/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Have questions about your trip or booking?</h3>
                        <p className="text-white/60 text-xs md:text-sm">
                            Connect directly with our travel advisory specialists on WhatsApp or visit our contact page.
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
