// Header.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './header.css';

const navLinkStyle = {
  background: 'white',
  borderStyle: 'solid',
  borderWidth: '5px',
  color: '#374151',
  fontSize: '15px',
  cursor: 'pointer',
  padding: 0
};

const navLinks = [
  { to: '/',        label: 'Home'    },
  { to: '/profile', label: 'Profile' },
  { to: '/about',   label: 'About'   },
];

export function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (to) => {
    navigate(to);
    setMenuOpen(false);
  };

  return (
    <header style={{
      background: 'linear-gradient(to right, #5da3ed, #fee2e2, #fee2e2)',
      borderBottom: '1px solid #fecaca'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#2563eb',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>BR</span>
            </div>
            <h1 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>Badger ReSearch</h1>
          </div>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <Button key={to} onClick={() => handleNavigate(to)} variant="link" style={navLinkStyle}>
                {label}
              </Button>
            ))}
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <nav
        id="mobile-nav"
        className={`header__mobile-nav ${menuOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ to, label }) => (
          <Button key={to} onClick={() => handleNavigate(to)} variant="link" style={navLinkStyle}>
            {label}
          </Button>
        ))}
      </nav>
    </header>
  );
}