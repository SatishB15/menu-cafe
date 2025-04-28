import { MenuDisplay } from "./components/menu-display"

function App() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">The Brew Bar</h1>
          <p className="text-amber-700 italic">Where every sip and every bite unfolds a story.</p>
        </header>

        <MenuDisplay />

        <footer className="mt-16 text-center text-amber-700 text-sm">
          <div className="space-y-1">
            <p className="font-semibold">Open Daily · 7:00 AM — 8:00 PM</p>
            <p>123 Street, Mumbai, India</p>
          </div>
          <p className="mt-6 text-xs text-amber-600">@ Images courtesy of Unsplash</p>
        </footer>

      </div>
    </main>
  )
}

export default App
