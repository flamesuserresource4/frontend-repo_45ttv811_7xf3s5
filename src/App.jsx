import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Location from './components/Location'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Location />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ikuae Hotel. All rights reserved.</p>
          <div className="text-sm text-slate-600">Crafted with care for unforgettable stays.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
