const initialState = {
  bookings: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_BOOKING_SUCCESS':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        loading: false,
      };
    case 'CREATE_BOOKING_FAIL':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
