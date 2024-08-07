const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Get all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(400).send('Error fetching tours');
  }
});

// Add new tour (admin only)
router.post('/', async (req, res) => {
  const { title, description, location, price, schedule } = req.body;
  try {
    const tour = new Tour({ title, description, location, price, schedule });
    await tour.save();
    res.status(201).send('Tour added');
  } catch (err) {
    res.status(400).send('Error adding tour');
  }
});

module.exports = router;
