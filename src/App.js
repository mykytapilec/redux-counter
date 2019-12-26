import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { connect } from 'react-redux';

import {incrementAction, decrementAction} from './actions';
import {store} from './store';

class App extends React.Component {
  constructor(props){
    super(props);

    this.increment.bind(this);
    this.decrement.bind(this);
  }

  increment(){
  	store.dispatch(incrementAction);
  }

  decrement(){
  	store.dispatch(decrementAction);
  }

  render(){
  	const count = store.getState().count;

  	return (
  			<div className="counter">
  				<span className="count">{count}</span>
  				<div className="buttons">
  					<button className="decrement" onClick={this.decrement}>-</button>
  					<button className="increment" onClick={this.increment}>+</button>
  				</div>
  			</div>
  		);
  }
} 

const mapStateToProps = store => {
  return { count: store.count };
}

export default connect(
  mapStateToProps
)(App);
