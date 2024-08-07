const initialState = {
    tours: [],
    loading: true,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'GET_TOURS_SUCCESS':
        return {
          ...state,
          tours: action.payload,
          loading: false,
        };
      case 'ADD_TOUR_SUCCESS':
        return {
          ...state,
          tours: [...state.tours, action.payload],
          loading: false,
        };
      case 'DELETE_TOUR_SUCCESS':
        return {
          ...state,
          tours: state.tours.filter((tour) => tour._id !== action.payload),
          loading: false,
        };
      case 'GET_TOURS_FAIL':
      case 'ADD_TOUR_FAIL':
      case 'DELETE_TOUR_FAIL':
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  }
  