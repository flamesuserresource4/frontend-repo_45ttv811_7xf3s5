import Spline from '@splinetool/react-spline'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8xB7b7c7nLJ1Yyix/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="max-w-xl bg-white/70 supports-[backdrop-filter]:backdrop-blur rounded-2xl p-6 sm:p-8 shadow-2xl">
          <p className="inline-flex items-center gap-2 text-amber-600 font-semibold">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            Welcome to luxury
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            ikuae Hotel
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Experience modern comfort in the heart of the UAE. Spacious rooms, premium amenities, and impeccable service—crafted for both business and leisure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#rooms" className="inline-flex justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-slate-800">
              Explore rooms
            </a>
            <a href="#contact" className="inline-flex justify-center rounded-full bg-white text-slate-900 border border-slate-200 px-6 py-3 text-sm font-semibold hover:bg-slate-50">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  )
}
