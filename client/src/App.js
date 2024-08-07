import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import PrivateRoute from './components/PrivateRoute';
import {
  AdminDashboard,
  ManageUsers,
  ManageTours,
  ViewBookings,
  UserForm,
  TourForm,
} from './components/admin';
import TourList from './components/tours/TourList';
import Booking from './components/bookings/Booking';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/tours" element={<TourList />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="users" element={<ManageUsers />} />
                <Route path="users/add" element={<UserForm />} />
                <Route path="users/edit/:id" element={<UserForm />} />
                <Route path="tours" element={<ManageTours />} />
                <Route path="tours/add" element={<TourForm />} />
                <Route path="tours/edit/:id" element={<TourForm />} />
                <Route path="bookings" element={<ViewBookings />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
