import axios from 'axios';

// Users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users`);
    dispatch({ type: 'GET_USERS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_USERS_FAIL', payload: err.response.data });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users/${id}`);
    dispatch({ type: 'GET_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_USER_FAIL', payload: err.response.data });
  }
};

export const addUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/users`, userData);
    dispatch({ type: 'ADD_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'ADD_USER_FAIL', payload: err.response.data });
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/admin/users/${id}`, userData);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'UPDATE_USER_FAIL', payload: err.response.data });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/admin/users/${id}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
  } catch (err) {
    dispatch({ type: 'DELETE_USER_FAIL', payload: err.response.data });
  }
};

// Tours
export const getTours = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/tours`);
    dispatch({ type: 'GET_TOURS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_TOURS_FAIL', payload: err.response.data });
  }
};

export const getTour = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/tours/${id}`);
    dispatch({ type: 'GET_TOUR_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_TOUR_FAIL', payload: err.response.data });
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

export const updateTour = (id, tourData) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/admin/tours/${id}`, tourData);
    dispatch({ type: 'UPDATE_TOUR_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'UPDATE_TOUR_FAIL', payload: err.response.data });
  }
};

export const deleteTour = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/admin/tours/${id}`);
    dispatch({ type: 'DELETE_TOUR_SUCCESS', payload: id });
  } catch (err) {
    dispatch({ type: 'DELETE_TOUR_FAIL', payload: err.response.data });
  }
};
