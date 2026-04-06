import './App.css'
import { Header } from './components/Header';
import { SearchHero } from './components/SearchHero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SearchHero />
      </main>
      <Footer />
    </div>
  );
}

export default App
