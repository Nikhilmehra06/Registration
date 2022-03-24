import * as actionType from '../action/Action';

const initialState = {
  firstName: 'Nikhil',
  lastName: 'Mehra',
  mobile: '78964512',
  address: 'Mohali',
  countary: 'India',
  email: 'Nikhilmehra7919@gmail.com',
  password: 'Hello Word',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_DETAIL: {
      return {
        ...state,
        state: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
