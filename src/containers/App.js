import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../styles/App.scss';
import {Header} from '../components/Header/Header';
import * as earningsActions from '../actions/EarningsActions'
import {bindActionCreators} from 'redux';
import {EarningsList} from '../components/EarningsList/EarningsList';

const headerTitle = 'Monthly Profit of Our Affiliates';
const subHeaders = [
  'Our affiliate program is the most profitable in the industry - a fact confirmed by the numbers.',
  'Take a look at our affiliates earnings growth over the past four years!'
];

class App extends Component {
  componentDidMount() {
    this.props.earningsActions.getEarnings();
  }

  render() {
    const {getEarnings} = this.props.earningsActions;
    const {earnings} = this.props.earnings;

    return (
      <div className="app">
        <Header header={headerTitle} subHeaders={subHeaders} refreshData={getEarnings}/>
        <EarningsList earnings={earnings}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({earnings: state.earnings});
const mapDispatchToProps = dispatch => ({
  earningsActions: bindActionCreators(earningsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
