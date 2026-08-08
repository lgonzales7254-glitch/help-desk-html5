import React from 'react';

export default function Dashboard({ tickets }) {
  const total = tickets ? tickets.length : 0;
  const abiertos = tickets ? tickets.filter(t => t.estado === 'Abierto').length : 0;
  const enProgreso = tickets ? tickets.filter(t => t.estado === 'En Progreso').length : 0;
  const cerrados = tickets ? tickets.filter(t => t.estado === 'Cerrado').length : 0;

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Panel de Control Semántico</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #0056b3', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>Total Tickets</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#0056b3' }}>{total}</p>
          </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #dc3545', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>Abiertos</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#dc3545' }}>{abiertos}</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #ffc107', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>En Progreso</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#856404' }}>{enProgreso}</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #28a745', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>Cerrados</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '10px', color: '#28a745' }}>{cerrados}</p>
        </div>
      </div>
    </div>
  );
}