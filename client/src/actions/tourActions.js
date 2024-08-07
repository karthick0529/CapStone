import axios from 'axios';

export const getTours = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tours`);
    dispatch({ type: 'GET_TOURS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_TOURS_FAIL', payload: err.response.data });
  }
};

export const addTour = (tourData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/tours`, tourData);
    dispatch({ type: 'ADD_TOUR_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'ADD_TOUR_FAIL', payload: err.response.data });
  }
};

export const deleteTour = (tourId) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/admin/tours/${tourId}`);
    dispatch({ type: 'DELETE_TOUR_SUCCESS', payload: tourId });
  } catch (err) {
    dispatch({ type: 'DELETE_TOUR_FAIL', payload: err.response.data });
  }
};
