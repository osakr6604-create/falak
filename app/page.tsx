import type { Metadata } from 'next'

// ─── Update these URLs once Waslny + TYT Vercel URLs are confirmed ───
const products = [
  {
    name: 'Waslny',
    nameAr: 'وصلني',
    tagline: 'WhatsApp orders, organized.',
    description:
      'A smart dashboard for Egyptian shop owners to manage WhatsApp orders, track customers, and run their business without the chaos.',
    features: ['Order management', 'Customer tracking', 'Mandoob routing', 'Arabic PWA'],
    category: 'B2B · Shop Management',
    emoji: '💬',
    url: 'https://waslny-lyart.vercel.app',
    textClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/20',
    hoverBorderClass: 'hover:border-emerald-500/40',
    bgClass: 'bg-emerald-500/[0.04]',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20',
    gradientClass: 'from-emerald-400 to-green-500',
    glowClass: 'bg-emerald-500/10',
    categoryColor: 'text-emerald-500/50',
  },
  {
    name: 'CV Architect',
    nameAr: 'بناء السيرة الذاتية',
    tagline: 'Gulf-ready CVs in minutes.',
    description:
      'Build professional Arabic and English CVs tailored for Egyptians applying to Gulf opportunities. Four templates, PDF export, and a freemium model.',
    features: ['4 professional templates', 'Arabic + English RTL', 'Instant PDF export', 'Gulf-optimized'],
    category: 'Consumer · Career',
    emoji: '📄',
    url: 'https://cv-builder-lovat-one.vercel.app',
    textClass: 'text-amber-400',
    borderClass: 'border-amber-500/20',
    hoverBorderClass: 'hover:border-amber-500/40',
    bgClass: 'bg-amber-500/[0.04]',
    badgeClass: 'bg-amber-500/15 text-amber-300 border border-amber-500/20',
    gradientClass: 'from-amber-400 to-orange-500',
    glowClass: 'bg-amber-500/10',
    categoryColor: 'text-amber-500/50',
  },
  {
    name: 'TYT',
    nameAr: 'خذ مهمتك',
    tagline: "Egypt's local task marketplace.",
    description:
      'Connect verified local helpers with people who need cleaning, repairs, moving, and more — with KYC verification, escrow payments, and in-chat bidding.',
    features: ['Verified helpers', 'Escrow payments', 'In-chat bidding', 'KYC + background check'],
    category: 'Marketplace · Gig Economy',
    emoji: '⚡',
    url: 'https://tyt-azure.vercel.app',
    textClass: 'text-violet-400',
    borderClass: 'border-violet-500/20',
    hoverBorderClass: 'hover:border-violet-500/40',
    bgClass: 'bg-violet-500/[0.04]',
    badgeClass: 'bg-violet-500/15 text-violet-300 border border-violet-500/20',
    gradientClass: 'from-violet-500 to-indigo-500',
    glowClass: 'bg-violet-500/10',
    categoryColor: 'text-violet-500/50',
  },
]

const tickerItems = [
  ...products.map((p) => `${p.emoji}  ${p.name}  ·`),
  ...products.map((p) => `${p.emoji}  ${p.name}  ·`),
  ...products.map((p) => `${p.emoji}  ${p.name}  ·`),
  ...products.map((p) => `${p.emoji}  ${p.name}  ·`),
]

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Falak products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: p.name,
      alternateName: p.nameAr,
      description: p.description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: p.url,
    },
  })),
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      {/* ─── Fixed background effects ─── */}
      <div className="fixed inset-0 pointer-events-none select-none" aria-hidden>
        {/* Gradient blobs */}
        <div className="absolute -top-48 -left-24 w-[800px] h-[800px] rounded-full bg-indigo-900/25 blur-[160px]" />
        <div className="absolute top-[35%] -right-32 w-[600px] h-[600px] rounded-full bg-emerald-900/15 blur-[140px]" />
        <div className="absolute -bottom-32 left-[25%] w-[700px] h-[700px] rounded-full bg-violet-900/15 blur-[160px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 0%, transparent 60%, #050A18 100%)',
          }}
        />
      </div>

      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b border-white/[0.05] backdrop-blur-2xl bg-[#050A18]/60">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-700 blur-sm opacity-80" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-violet-700 flex items-center justify-center text-[13px] font-black tracking-tight shadow-lg">
                F
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-[17px] tracking-tight">Falak</span>
              <span className="text-white/20 text-sm font-arabic leading-none">فلك</span>
            </div>
          </div>
          {/* Right side */}
          <a
            href="mailto:contact@falakeg.com"
            className="hidden sm:flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 4.5L7 8.5L13 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Get in touch
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-16 pb-24">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/45 mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          3 products live in Egypt
        </div>

        {/* Wordmark */}
        <h1
          className="font-black tracking-[-0.045em] leading-none mb-1 select-none"
          style={{ fontSize: 'clamp(5.5rem, 20vw, 13rem)' }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(160deg, #ffffff 30%, rgba(255,255,255,0.35) 100%)',
            }}
          >
            Falak
          </span>
        </h1>
        <p
          className="font-arabic font-light text-white/15 mb-12 select-none"
          style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}
        >
          فلك
        </p>

        {/* Motto */}
        <p className="text-xl md:text-2xl font-semibold text-white/80 mb-4 tracking-tight">
          Tools that move Egypt forward.
        </p>
        <p className="text-white/35 text-base md:text-[17px] max-w-md mx-auto leading-relaxed mb-12">
          A growing suite of products for Egyptian shop owners, job seekers, and workers.
        </p>

        {/* Scroll CTA */}
        <a
          href="#products"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#050A18] font-semibold text-sm hover:bg-white/90 active:scale-[0.97] transition-all duration-150 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Explore our products
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.5v11M2 8l5 5.5L12 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Ticker */}
        <div className="ticker-wrapper absolute bottom-10 left-0 right-0 overflow-hidden border-y border-white/[0.04] py-3">
          <div className="ticker-track flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
            {tickerItems.map((item, i) => (
              <span key={i} className="text-white/15 text-sm font-medium px-5 tracking-widest uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section id="products" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25 font-semibold mb-5">Our Products</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Built for real problems.
              <br />
              <span className="text-white/30">In Egypt.</span>
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className={`
                  relative flex flex-col gap-5 rounded-2xl p-6 overflow-hidden
                  border ${product.borderClass} ${product.hoverBorderClass} ${product.bgClass}
                  transition-all duration-300 group
                `}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${product.gradientClass} opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Corner glow */}
                <div className={`absolute top-0 left-0 w-48 h-48 ${product.glowClass} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Header row */}
                <div className="relative flex items-start justify-between gap-2">
                  <div>
                    <div className="text-3xl mb-3 select-none">{product.emoji}</div>
                    <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>
                    <p className={`text-xs font-arabic mt-0.5 ${product.textClass} opacity-60`}>{product.nameAr}</p>
                  </div>
                  <span className="flex-shrink-0 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium mt-0.5">
                    Live
                  </span>
                </div>

                {/* Category */}
                <p className={`relative text-[11px] uppercase tracking-[0.18em] font-semibold ${product.categoryColor}`}>
                  {product.category}
                </p>

                {/* Tagline */}
                <p className="relative font-semibold text-white/85 leading-snug text-[15px]">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="relative text-white/38 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Feature badges */}
                <div className="relative flex flex-wrap gap-1.5">
                  {product.features.map((f) => (
                    <span key={f} className={`text-[11px] px-2.5 py-1 rounded-full ${product.badgeClass} font-medium`}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative mt-auto pt-4 border-t border-white/[0.06]">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${product.textClass} hover:opacity-70 transition-opacity`}
                  >
                    Visit {product.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <p className="text-center text-white/20 text-sm mt-16 font-arabic">
            كل أداة بُنيت لتحل مشكلة حقيقية في السوق المصري
          </p>
          <p className="text-center text-white/15 text-xs mt-1">
            Every tool built to solve a real problem in the Egyptian market.
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative border-t border-white/[0.05] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-700 opacity-70 flex-shrink-0" />
            <span className="text-white/30 text-sm font-medium">Falak © {new Date().getFullYear()}</span>
          </div>
          {/* Made in Egypt */}
          <span className="text-white/20 text-sm">Made with ❤️ in Egypt 🇪🇬</span>
          {/* Product links */}
          <div className="flex items-center gap-6">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 text-sm hover:text-white/50 transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
