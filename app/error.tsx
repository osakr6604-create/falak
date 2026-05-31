'use client'

import Link from 'next/link'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#050A18] text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-48 -left-24 w-[800px] h-[800px] rounded-full bg-indigo-900/25 blur-[160px]" />
        <div className="absolute -bottom-32 right-[20%] w-[600px] h-[600px] rounded-full bg-violet-900/15 blur-[160px]" />
      </div>

      <p
        className="relative font-black tracking-[-0.045em] leading-none select-none bg-clip-text text-transparent mb-6"
        style={{
          fontSize: 'clamp(4rem, 14vw, 8rem)',
          backgroundImage: 'linear-gradient(160deg, #ffffff 30%, rgba(255,255,255,0.35) 100%)',
        }}
      >
        Oops
      </p>
      <p className="relative text-xl md:text-2xl font-semibold text-white/80 mb-3 tracking-tight">
        Something went wrong.
      </p>
      <p className="relative text-white/35 text-base max-w-sm mx-auto leading-relaxed mb-10">
        An unexpected error occurred. Try again, or head back home.
      </p>

      <div className="relative flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#050A18] font-semibold text-sm hover:bg-white/90 active:scale-[0.97] transition-all duration-150 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 font-semibold text-sm hover:text-white hover:border-white/20 transition-all duration-150 backdrop-blur-sm"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
