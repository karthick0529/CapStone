const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Tour = require('../models/Tour');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// View all users
router.get('/users', auth, admin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).send('Error fetching users');
  }
});

// Get a single user
router.get('/users/:id', auth, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).send('Error fetching user');
  }
});

// Update a user
router.put('/users/:id', auth, admin, async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, mobile }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).send('Error updating user');
  }
});

// Delete a user
router.delete('/users/:id', auth, admin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
  } catch (err) {
    res.status(400).send('Error deleting user');
  }
});

// CRUD operations for tours
router.get('/tours', auth, admin, async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(400).send('Error fetching tours');
  }
});

router.get('/tours/:id', auth, admin, async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.json(tour);
  } catch (err) {
    res.status(400).send('Error fetching tour');
  }
});

router.post('/tours', auth, admin, async (req, res) => {
  const { title, description, location, price, schedule } = req.body;
  try {
    const tour = new Tour({ title, description, location, price, schedule });
    await tour.save();
    res.status(201).send('Tour added');
  } catch (err) {
    res.status(400).send('Error adding tour');
  }
});

router.put('/tours/:id', auth, admin, async (req, res) => {
  const { title, description, location, price, schedule } = req.body;
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, { title, description, location, price, schedule }, { new: true });
    res.json(tour);
  } catch (err) {
    res.status(400).send('Error updating tour');
  }
});

router.delete('/tours/:id', auth, admin, async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.send('Tour deleted');
  } catch (err) {
    res.status(400).send('Error deleting tour');
  }
});

module.exports = router;
