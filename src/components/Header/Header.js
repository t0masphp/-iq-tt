import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/Header.scss';

export const Header = props => {
  const {header, subHeaders, refreshData} = props;
  return <header className="app-header">
    <h1 className="header-title">{header}</h1>
    {subHeaders.map((subtitle, index) => <h4 key={index} className="header-subtitle">{subtitle}</h4>)}
    <div className="header-refresh" onClick={refreshData}>Refresh data</div>
  </header>
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
  subHeaders: PropTypes.array.isRequired,
  refreshData: PropTypes.func.isRequired,
};