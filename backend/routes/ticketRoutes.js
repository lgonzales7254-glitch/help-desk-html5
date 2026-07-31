const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.gettickets);
router.post('/', ticketController.createticket);
router.put('/:id', ticketController.updateticket);
router.delete('/:id', ticketController.deleteticket);

module.exports = router;