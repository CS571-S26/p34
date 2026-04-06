export function Header() {
  return (
    <header style={{
      background: '#fee2e2',
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
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>A research-finding portal</p>
            </div>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            {['Home', 'Browse', 'About', 'Contact'].map(link => (
              <a key={link} href="#" style={{
                color: '#374151',
                textDecoration: 'none',
                fontSize: '15px'
              }}>{link}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}