import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  auth: authReducer,
  bookings: bookingReducer,
  admin: adminReducer,
});
