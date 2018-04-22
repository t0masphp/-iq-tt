import {GET_EARNINGS_REQUEST, GET_EARNINGS_SUCCESS} from '../constants/Earnings';

const initialState = {
  fetching: false,
  earnings: []
};

export default function earnings(state = initialState, action) {
  switch (action.type) {
    case GET_EARNINGS_REQUEST:
      return {...state, fetching: true};

    case GET_EARNINGS_SUCCESS:
      return {...state, earnings: action.payload, fetching: false};

    default:
      return state;
  }
}