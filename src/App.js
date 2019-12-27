import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { connect } from 'react-redux';

import {incrementAction, decrementAction} from './actions';
import {store} from './store';

class App extends React.Component {

  render(){
    const count = store.getState().count;
    const {increment, decrement} = this.props;

    return (
        <div className="counter">
          <span className="count">{count}</span>
          <div className="buttons">
            <button className="decrement" onClick={decrement}>-</button>
            <button className="increment" onClick={increment}>+</button>
          </div>
        </div>
      );
  }
} 

const mapStateToProps = store => {
  return { count: store.count };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => store.dispatch(incrementAction),
    decrement: () => store.dispatch(decrementAction)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
