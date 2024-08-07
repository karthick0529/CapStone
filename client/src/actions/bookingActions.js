import axios from 'axios';

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/bookings`, bookingData);
    dispatch({ type: 'CREATE_BOOKING_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'CREATE_BOOKING_FAIL', payload: err.response.data });
  }
};
