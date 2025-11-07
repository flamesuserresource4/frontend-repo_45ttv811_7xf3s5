import { MapPin, Car, Plane, Train } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              In the heart of the UAE
            </h2>
            <p className="mt-3 text-slate-600">
              Perfectly positioned for business and leisure. Minutes from major attractions, shopping, and transport hubs.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-slate-800" />
                <p className="text-slate-700">Downtown district, steps from the metro and key business centers.</p>
              </div>
              <div className="flex items-start gap-3">
                <Car className="h-5 w-5 mt-0.5 text-slate-800" />
                <p className="text-slate-700">Valet parking and EV charging available on site.</p>
              </div>
              <div className="flex items-start gap-3">
                <Plane className="h-5 w-5 mt-0.5 text-slate-800" />
                <p className="text-slate-700">20 minutes from the international airport.</p>
              </div>
              <div className="flex items-start gap-3">
                <Train className="h-5 w-5 mt-0.5 text-slate-800" />
                <p className="text-slate-700">Direct access to public transport and city sights.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231391.83803148292!2d55.08296985698088!3d25.0757073342751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434dd99d2d2f%3A0x50dc0b863e8c52cb!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
