import React from 'react';

export default function Navbar({ setVista }) {
  return (
    <header style={{ background: '#002855', padding: '1rem 2rem', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderRadius: '4px' }}>
      <h2 style={{ margin: 0, fontSize: '20px' }}>Help Desk - UTM</h2>
      <nav>
        <button onClick={() => setVista('dashboard')} style={{ background: '#6c757d', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginRight: '10px' }}>Dashboard</button>
        <button onClick={() => setVista('tickets')} style={{ background: '#0056b3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Gestión de Tickets</button>
      </nav>
    </header>
  );
}