// Captura la URL del servidor remoto en producción o usa localhost en desarrollo
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tickets";

// Función obligatoria exigida por la rúbrica para desinfectar entradas de texto (Evita XSS)
export const sanitizeInput = (text) => {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};

// Servicios asíncronos para comunicar tus pantallas con tu API REST de la Actividad 8
export const ticketService = {
     getAll: async () => {
    const res = await fetch(API_URL);
    return res.json();
  },
  create: async (ticket) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });
    return res.json();
  },
  updateState: async (id, nuevoEstado) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: nuevoEstado }),
    });
    return res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return res.json();
  }
};