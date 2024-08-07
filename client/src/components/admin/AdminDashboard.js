import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ManageUsers from './ManageUsers';
import ManageTours from './ManageTours';
import ViewBookings from './ViewBookings';
import Navbar from '../Navbar';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li><Link to="users" className="text-blue-600 hover:underline">Manage Users</Link></li>
            <li><Link to="tours" className="text-blue-600 hover:underline">Manage Tours</Link></li>
            <li><Link to="bookings" className="text-blue-600 hover:underline">View Bookings</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="users/*" element={<ManageUsers />} />
          <Route path="tours/*" element={<ManageTours />} />
          <Route path="bookings" element={<ViewBookings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
