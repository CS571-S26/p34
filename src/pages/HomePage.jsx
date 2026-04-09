import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function HomePage() {
  const [hovered, setHovered] = useState(null);

  const getFlexValue = (side) => {
    if (hovered === null) return 1;
    return hovered === side ? 1.2 : 0.8;
  };

  const sideStyle = (side, bg) => ({
    flex: getFlexValue(side),
    background: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'flex 0.4s ease',
    overflow: 'hidden'
  });

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      {/* Left side */}
      <div
        style={sideStyle('left', '#2563eb')}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/search')}
      >
        <span style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>Search</span>
      </div>
      {/* Right side */}
      <div
        style={sideStyle('right', '#dc2626')}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/profile')}
      >
        <span style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>Profile</span>
      </div>
    </div>
  );
}