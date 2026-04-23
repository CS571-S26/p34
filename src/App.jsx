import './App.css';
// Import Router
import { Routes, Route } from 'react-router-dom';
// Import Header & Footer
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// Import individual pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import Profile from './pages/ProfilePage';


function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
