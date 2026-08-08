import React from 'react';
import { ticketService } from '../api';

export default function TicketList({ tickets, fetchTickets }) {
  
  const handleCambiarEstado = async (id, estadoActual) => {
    const estados = ['Abierto', 'En Progreso', 'Cerrado'];
    const siguienteIndex = (estados.indexOf(estadoActual) + 1) % estados.length;
    await ticketService.updateState(id, estados[siguienteIndex]);
    fetchTickets();
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Desea remover permanentemente esta incidencia de la base cloud?")) {
      await ticketService.delete(id);
      fetchTickets();
    }
  };

   return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflowX: 'auto', flex: 1 }}>
      <h3>Historial del Servidor Distribuido</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            <th style={{ padding: '12px' }}>Incidente</th>
            <th style={{ padding: '12px' }}>Categoría</th>
            <th style={{ padding: '12px' }}>Prioridad</th>
            <th style={{ padding: '12px' }}>Estado</th>
            <th style={{ padding: '12px' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {tickets && tickets.map(t => (
            <tr key={t._id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}><strong>{t.titulo}</strong><p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{t.descripcion}</p></td>
              <td style={{ padding: '12px' }}>{t.categoria}</td>
              <td style={{ padding: '12px' }}>{t.prioridad}</td>
              <td style={{ padding: '12px' }}>
                <button onClick={() => handleCambiarEstado(t._id, t.estado)} style={{ padding: '6px 10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  {t.estado} 🔄
                </button>
              </td>
              <td style={{ padding: '12px' }}>
                <button onClick={() => handleEliminar(t._id)} style={{ padding: '6px 12px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}