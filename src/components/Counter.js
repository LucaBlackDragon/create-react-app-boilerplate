/**
 * Created by lucab on 02/11/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';

const minValue = -10;
const maxValue = 10;
const step = 1;

class Counter extends Component {
  render() {
    return (
      <div style={{ padding: '0 1em' }}>
        <Slider min={minValue}
                max={maxValue}
                step={step}
                defaultValue={0}
                value={this.props.counter}
                onChange={this.props.onChange}/>
        <FlatButton label="-" onTouchTap={this.props.onDecrement.bind(this)} />
        <span>{this.props.counter}</span>
        <FlatButton label="+" onTouchTap={this.props.onIncrement.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onChange: (evt, val) => {
      if (val >= minValue && val <= maxValue) dispatch({ type: 'UPDATE', value: val });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
