const initialState = {
  users: [],
  tours: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // Users
    case 'GET_USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false };
    case 'GET_USERS_FAIL':
    case 'ADD_USER_FAIL':
    case 'UPDATE_USER_FAIL':
    case 'DELETE_USER_FAIL':
      return { ...state, error: action.payload, loading: false };

    case 'ADD_USER_SUCCESS':
      return { ...state, users: [...state.users, action.payload], loading: false };

    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
        loading: false,
      };

    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
        loading: false,
      };

    // Tours
    case 'GET_TOURS_SUCCESS':
      return { ...state, tours: action.payload, loading: false };
    case 'GET_TOURS_FAIL':
    case 'ADD_TOUR_FAIL':
    case 'UPDATE_TOUR_FAIL':
    case 'DELETE_TOUR_FAIL':
      return { ...state, error: action.payload, loading: false };

    case 'ADD_TOUR_SUCCESS':
      return { ...state, tours: [...state.tours, action.payload], loading: false };

    case 'UPDATE_TOUR_SUCCESS':
      return {
        ...state,
        tours: state.tours.map((tour) =>
          tour._id === action.payload._id ? action.payload : tour
        ),
        loading: false,
      };

    case 'DELETE_TOUR_SUCCESS':
      return {
        ...state,
        tours: state.tours.filter((tour) => tour._id !== action.payload),
        loading: false,
      };

    default:
      return state;
  }
}
