import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';

import '../../styles/Cylinder.scss';

export class Cylinder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {animate: false};
  }

  componentDidMount() {
    // Added two nested requestAnimationFrames
    requestAnimationFrame(() => {
      // Firefox will sometimes merge changes that happened here
      requestAnimationFrame(() => {
        this.setState({animate: true});
      });
    });
  }

  render() {
    const {bottom, top, percent, opacity} = this.props;
    const scaledPercent = (Math.round(percent * 0.75)); // Scale percent to
    return (
      <div className="css-cylinder">
        <div className="css-cylinder-animate-container">
          <div className={`css-cylinder-header t${this.state.animate ? 100 - scaledPercent : '100'}`}>{top}</div>
          <div style={{opacity: opacity}} className={`css-cylinder-barchart h${this.state.animate ? scaledPercent : '1'}`}/>
          <div className="css-cylinder-footer">{bottom}</div>
        </div>
      </div>
    );
  }
}

Cylinder.propTypes = {
  percent: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  bottom: PropTypes.any.isRequired,
  top: PropTypes.any.isRequired
};