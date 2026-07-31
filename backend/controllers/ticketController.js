const ticket = require('../models/ticket');

exports.gettickets = async (req, res) => {
    try {
        const tickets = await ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la lista", error });
    }
};

exports.createticket = async (req, res) => {
    try {
        const nuevoticket = new ticket(req.body);
        await nuevoticket.save();
        res.status(201).json(nuevoticket);
         } catch (error) {
        res.status(400).json({ mensaje: "Error al registrar el ticket", error });
    }
};

exports.updateticket = async (req, res) => {
    try {
        const actualizado = await ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al actualizar", error });
    }
};

exports.deleteticket = async (req, res) => {
    try {
        await ticket.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "ticket eliminado con éxito" });
         } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error });
    }
}