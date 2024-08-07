import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTours } from '../../actions/tourActions';
import Navbar from '../Navbar';

const TourList = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.admin.tours);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Available Tours</h2>
        <ul className="space-y-4">
          {tours.map((tour) => (
            <li key={tour._id} className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold">{tour.title}</h3>
              <p>{tour.description}</p>
              <p>Location: {tour.location}</p>
              <p>Price: ${tour.price}</p>
              <p>Schedule: {new Date(tour.schedule).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourList;
