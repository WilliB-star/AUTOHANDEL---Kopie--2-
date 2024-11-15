import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VerkaufenPage from './VerkaufenPage'; // VerkaufenPage importieren

// App-Komponente
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e237e]">
        <nav className="bg-[#1e237e] p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">
              KFZ ALKERKER
            </Link>
            <div className="space-x-6">
              <Link to="/fahrzeuge" className="text-white hover:text-gray-300">
                FAHRZEUGE
              </Link>
              <Link to="/verkaufen" className="text-white hover:text-gray-300">
                VERKAUFEN
              </Link>
              <Link to="/admin" className="text-white hover:text-gray-300">
                ADMIN
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fahrzeuge" element={<div>Fahrzeuge Page</div>} />
            <Route path="/verkaufen" element={<VerkaufenPage />} />
            <Route path="/admin" element={<div>Admin Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Home-Komponente
function HomePage() {
  return (
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-8">
        Willkommen bei KFZ ALKERKER
      </h1>
      <p className="text-xl mb-12">
        Ihr vertrauenswürdiger Partner für den Kauf und Verkauf von Gebrauchtwagen
      </p>
      <div className="flex justify-center gap-6">
        <Link
          to="/fahrzeuge"
          className="bg-white text-[#1e237e] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          FAHRZEUGE ANSEHEN
        </Link>
        <Link
          to="/verkaufen"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
        >
          FAHRZEUG VERKAUFEN
        </Link>
      </div>
    </div>
  );
}

export default App;
