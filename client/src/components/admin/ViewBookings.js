import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/admin/bookings`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">User</th>
            <th className="py-2">Tour</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td className="py-2">{booking.user.name}</td>
              <td className="py-2">{booking.tour.title}</td>
              <td className="py-2">{new Date(booking.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
