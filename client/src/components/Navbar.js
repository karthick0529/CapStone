import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Link to="/tours" className="mr-4">
            WildLens Tours
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <Link to="/tours" className="text-white mr-4">
                Tours
              </Link>
              <Link to="/book" className="text-white mr-4">
                Bookings
              </Link>
              <Link to="/admin" className="text-white mr-4">
                Admin
              </Link>
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
