import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-48 -left-24 w-[800px] h-[800px] rounded-full bg-indigo-900/25 blur-[160px]" />
        <div className="absolute -bottom-32 right-[20%] w-[600px] h-[600px] rounded-full bg-violet-900/15 blur-[160px]" />
      </div>

      <p
        className="relative font-black tracking-[-0.045em] leading-none select-none bg-clip-text text-transparent mb-6"
        style={{
          fontSize: 'clamp(5rem, 18vw, 10rem)',
          backgroundImage: 'linear-gradient(160deg, #ffffff 30%, rgba(255,255,255,0.35) 100%)',
        }}
      >
        404
      </p>
      <p className="relative text-xl md:text-2xl font-semibold text-white/80 mb-3 tracking-tight">
        This page drifted off course.
      </p>
      <p className="relative text-white/35 text-base max-w-sm mx-auto leading-relaxed mb-10">
        The page you are looking for does not exist or has moved.
      </p>

      <Link
        href="/"
        className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#050A18] font-semibold text-sm hover:bg-white/90 active:scale-[0.97] transition-all duration-150 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      >
        Back to home
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 12L11 6L5 0" transform="rotate(180 7 7)" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  )
}
