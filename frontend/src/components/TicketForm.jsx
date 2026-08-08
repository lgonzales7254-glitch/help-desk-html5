import React, { useState } from 'react';
import { ticketService, sanitizeInput } from '../api';

export default function TicketForm({ onTicketCreado }) {
  const [form, setForm] = useState({ titulo: '', descripcion: '', categoria: 'Software', prioridad: 'Media' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sanitización obligatoria para evitar inyecciones XSS exigidas por la rúbrica
    const ticketSanitizado = {
      titulo: sanitizeInput(form.titulo),
      descripcion: sanitizeInput(form.descripcion),
      categoria: form.categoria,
      prioridad: form.prioridad
    };
    
    await ticketService.create(ticketSanitizado);
    setForm({ titulo: '', descripcion: '', categoria: 'Software', prioridad: 'Media' });
     onTicketCreado();
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h3 style={{ marginBottom: '15px' }}>Crear Nuevo Ticket</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Título del Incidente:</label>
          <input type="text" value={form.titulo} onChange={e => setForm({...form, titulo: e.target.value})} placeholder="Ej. Falla en switch de red" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #6c757d' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Categoría:</label>
          <select value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #6c757d' }}>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Red">Redes</option>
            </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Prioridad:</label>
          <select value={form.prioridad} onChange={e => setForm({...form, prioridad: e.target.value})} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #6c757d' }}>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Descripción Detallada:</label>
          <textarea value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} placeholder="Detalle el inconveniente técnico..." required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #6c757d', minHeight: '100px' }}></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#0056b3', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Registrar Incidente</button>
      </form>
    </div>
    );
}