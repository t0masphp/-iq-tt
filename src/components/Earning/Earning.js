import PropTypes from 'prop-types'
import React from 'react';
import {nFormatter} from '../../utils';
import {Cylinder} from '../Cylinder/Cylinder';

const EarningTop = ({amount, currency, period}) => {
  const {formattedValue, symbol} = nFormatter(amount, 1);
  return <div className="earning-top">
    <div className="earning-top-amount">{currency}{formattedValue}</div>
    <div className="earning-top-scale">{symbol}</div>
    <div className="earning-top-period">{period}</div>
  </div>
};

export const Earning = ({earning}) => {
  const top = <EarningTop {...earning}/>;
  const bottom = <div>{earning.year}</div>;

  return <Cylinder top={top} bottom={bottom} opacity={earning.opacity} percent={earning.percent}/>
};

Earning.propTypes = {
  earning: PropTypes.object.isRequired
};