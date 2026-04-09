import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';

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
  { to: '/', label: 'Home'},
  { to: '/about', label: 'About'},
  { to: '//', label: 'W.I.P.'},
  // { to: '/contact', label: 'Contact'},
  { to: '/profile', label: 'Profile'},
  // { to: '/', label: 'W.I.P.'},
];

export function Header() {
  const navigate = useNavigate();

  return (
    <header style={{
      // background: '#',
      background: 'linear-gradient(to right, #5da3ed, #fee2e2, #fee2e2)',
      borderBottom: '1px solid #fecaca'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
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
            <div>
              <h1 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>Badger ReSearch</h1>
              {/* <p style={{ fontSize: '12px', color: '#111827', margin: 0 }}>A research-finding portal</p> */}
            </div>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            {navLinks.map(({ to, label}) => (
              <Button key={to} onClick={() => navigate(to)} variant="link" style={navLinkStyle}>
                {label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}