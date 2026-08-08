import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { ticketService } from './api';

export default function App() {
  const [vista, setVista] = useState('dashboard');
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const data = await ticketService.getAll();
      setTickets(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error cargando la API remota", err);
    }
    };

  useEffect(() => { fetchTickets(); }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f8f9fa', minHeight: '100vh', margin: 0 }}>
      <Navbar setVista={setVista} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {vista === 'dashboard' ? (
          <Dashboard tickets={tickets} />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            <TicketForm onTicketCreado={fetchTickets} />
            <TicketList tickets={tickets} fetchTickets={fetchTickets} />
          </div>
        )}
      </div>
    </div>
  );
}
    
