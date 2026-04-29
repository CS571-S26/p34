// HomePage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-page.css';

const HOW_IT_WORKS = [
  { label: 'Build your profile',     sub: 'Add your research interests' },
  { label: 'Discover professors',    sub: 'Search across all departments' },
  { label: 'Find your match',        sub: 'See who shares your focus'    },
];

export default function HomePage() {
  const [hovered, setHovered]     = useState(null);
  const [professors, setProfessors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}professors.json`)
      .then((res) => res.json())
      .then(setProfessors)
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  // Derive stats from the data
  const stats = useMemo(() => {
    if (!professors.length) return null;

    const departments = new Set(professors.map((p) => p.department));
    const allInterests = new Set(professors.flatMap((p) => p.researchInterests));

    return [
      { number: professors.length,    label: 'Professors'       },
      { number: departments.size,     label: 'Departments'      },
      { number: allInterests.size,    label: 'Research Areas'   },
    ];
  }, [professors]);

  const getFlexValue = (side) => {
    if (hovered === null) return 1;
    return hovered === side ? 1.2 : 0.8;
  };

  const panelStyle = (side, bg) => ({
    flex: getFlexValue(side),
    background: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'flex 0.4s ease',
    overflow: 'hidden',
    border: 'none',
    borderRadius: 0,
    padding: 0,
  });

  const handleNavigate = (to) => navigate(to);

  return (
    <>
      {/* ── Visually hidden page title ── */}
      <h1 style={{
        position: 'absolute', width: '1px', height: '1px',
        padding: 0, margin: '-1px', overflow: 'hidden',
        clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
      }}>
        Badger ReSearch — Academic Research Portal
      </h1>

      {/* ── Stats bar ── */}
      {stats && (
        <div className="home-stats" aria-label="Platform statistics">
          {stats.map(({ number, label }) => (
            <div key={label} className="home-stats__item">
              <span className="home-stats__number">{number}</span>
              <span className="home-stats__label">{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── Split panels ── */}
      <div className="home-panels">
        <button
          className="home-panel"
          style={panelStyle('left', '#2563eb')}
          aria-label="Search — browse and filter academic professors"
          onMouseEnter={() => setHovered('left')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleNavigate('/search')}
        >
          <div className="home-panel__text" aria-hidden="true">
            <span className="home-panel__title">Search</span>
            <span className="home-panel__sublabel">Browse {professors.length || '...'} faculty by research interest</span>
          </div>
        </button>

        <button
          className="home-panel"
          style={panelStyle('right', '#dc2626')}
          aria-label="Profile — view your research interests and matched professors"
          onMouseEnter={() => setHovered('right')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleNavigate('/profile')}
        >
          <div className="home-panel__text" aria-hidden="true">
            <span className="home-panel__title">Profile</span>
            <span className="home-panel__sublabel">See professors matched to your interests</span>
          </div>
        </button>
      </div>

      {/* ── How it works ── */}
      <div className="home-how">
        <div className="home-how__inner">
          <h2 className="home-how__title">How it works</h2>
          <div className="home-how__steps">
            {HOW_IT_WORKS.map(({ label, sub }, i) => (
              <React.Fragment key={label}>
                <div className="home-how__step">
                  <div className="home-how__step-number">{i + 1}</div>
                  <span className="home-how__step-label">{label}</span>
                  <span className="home-how__step-sub">{sub}</span>
                </div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <span className="home-how__arrow" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}