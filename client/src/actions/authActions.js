import axios from 'axios';

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
  }
};

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth`);
    dispatch({ type: 'USER_LOADED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
