import React from 'react'
import PropTypes from 'prop-types';

import {Earning} from '../Earning/Earning';

export const EarningsList = props => (
  <div className="app-cylinder-wrapper">
    {props.earnings.map((item, index) => <Earning key={`${item.year}-${index}`} earning={item}/>)}
  </div>
);

EarningsList.propTypes = {
  earnings: PropTypes.array.isRequired
};