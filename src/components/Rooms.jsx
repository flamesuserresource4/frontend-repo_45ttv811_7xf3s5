import { BedDouble, Wifi, Coffee, ShowerHead } from 'lucide-react'

const amenities = [
  { icon: BedDouble, label: 'King beds' },
  { icon: Wifi, label: 'High-speed Wi‑Fi' },
  { icon: Coffee, label: 'In-room coffee' },
  { icon: ShowerHead, label: 'Rain showers' },
]

const rooms = [
  {
    name: 'Deluxe Suite',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Executive Room',
    price: 329,
    image:
      'https://images.unsplash.com/photo-1559599238-0fa773f2259b?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Family Suite',
    price: 559,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2069&auto=format&fit=crop',
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Rooms & Suites
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Designed for comfort and style, every room features premium linens, modern tech, and thoughtful touches.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 text-slate-700">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.name} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={room.image} alt={room.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{room.name}</h3>
                  <div className="text-slate-900 font-bold">AED {room.price}</div>
                </div>
                <p className="mt-1 text-sm text-slate-600">Per night, taxes included</p>
                <a href="#contact" className="mt-4 inline-flex justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
                  Book this room
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden mt-8 flex flex-wrap gap-3">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
