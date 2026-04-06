import { useState } from 'react';

export function SearchHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{
    //   background: 'linear-gradient(135deg, #eff6ff, #eef2ff)',
      background: 'white',
      padding: '64px 16px'
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}>
            Discover Academic Research
          </h2>
          <p style={{ fontSize: '18px', color: '#4b5563' }}>
            Search through thousands of research papers, publications, and academic resources
          </p>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <input
              type="text"
              placeholder="Search by title, author, keyword, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '12px 16px',
                outline: 'none',
                border: 'none',
                fontSize: '16px',
                color: '#111827'
              }}
            />
            <button style={{
              padding: '12px 24px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}