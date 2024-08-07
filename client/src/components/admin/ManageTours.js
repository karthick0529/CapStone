import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTours, deleteTour } from '../../actions/adminActions';
import { Link } from 'react-router-dom';

const ManageTours = () => {
  const dispatch = useDispatch();
  const tours = useSelector(state => state.admin.tours);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Manage Tours</h2>
      <Link to="add" className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700">Add Tour</Link>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Location</th>
            <th className="py-2">Price</th>
            <th className="py-2">Schedule</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => (
            <tr key={tour._id}>
              <td className="py-2">{tour.title}</td>
              <td className="py-2">{tour.description}</td>
              <td className="py-2">{tour.location}</td>
              <td className="py-2">${tour.price}</td>
              <td className="py-2">{new Date(tour.schedule).toLocaleDateString()}</td>
              <td className="py-2">
                <Link to={`edit/${tour._id}`} className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">Edit</Link>
                <button
                  onClick={() => dispatch(deleteTour(tour._id))}
                  className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTours;
