import {GET_EARNINGS_REQUEST, GET_EARNINGS_SUCCESS} from '../constants/Earnings'
import {generateEarnings} from '../utils';

export function getEarnings() {
  return (dispatch) => {
    dispatch({
      type: GET_EARNINGS_REQUEST
    });

    dispatch({
      type: GET_EARNINGS_SUCCESS,
      payload: generateEarnings()
    });

  }
}

