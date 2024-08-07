const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create new booking
router.post('/', async (req, res) => {
  const { user, tour, companions } = req.body;
  try {
    const booking = new Booking({ user, tour, companions });
    await booking.save();
    res.status(201).send('Booking created');
  } catch (err) {
    res.status(400).send('Error creating booking');
  }
});

module.exports = router;
