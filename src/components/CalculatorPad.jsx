import React, { Component } from 'react';
import './Calculator.css';
class CalculatorPad extends Component {
  state = {};
  render() {
    return (
      <div className="calculator_buttons">
        <div
          className="calculator_button calculator_extras"
          id="clear"
          onClick={this.props.handleClear}
        >
          AC
        </div>
        <div
          className="calculator_button calculator_extras"
          id="invert"
          value="+/-"
        >
          +/-
        </div>
        <div className="calculator_button calculator_extras" id="percentage">
          %
        </div>
        <div
          className="calculator_button calculator_operator"
          id="divide"
          value="/"
          onClick={this.props.handleOperator}
        >
          /
        </div>
        <div
          className="calculator_button"
          id="seven"
          value="7"
          onClick={this.props.handleNumber}
        >
          7
        </div>
        <div
          className="calculator_button"
          id="eight"
          value="8"
          onClick={this.props.handleNumber}
        >
          8
        </div>
        <div
          className="calculator_button"
          id="nine"
          value="9"
          onClick={this.props.handleNumber}
        >
          9
        </div>
        <div
          className="calculator_button calculator_operator"
          id="multiply"
          value="x"
          onClick={this.props.handleOperator}
        >
          x
        </div>
        <div
          className="calculator_button"
          id="four"
          value="4"
          onClick={this.props.handleNumber}
        >
          4
        </div>
        <div
          className="calculator_button"
          id="five"
          value="5"
          onClick={this.props.handleNumber}
        >
          5
        </div>
        <div
          className="calculator_button"
          id="six"
          value="6"
          onClick={this.props.handleNumber}
        >
          6
        </div>
        <div
          className="calculator_button calculator_operator"
          id="subtract"
          value="-"
          onClick={this.props.handleOperator}
        >
          -
        </div>
        <div
          className="calculator_button"
          id="one"
          value="1"
          onClick={this.props.handleNumber}
        >
          1
        </div>
        <div
          className="calculator_button"
          id="two"
          value="2"
          onClick={this.props.handleNumber}
        >
          2
        </div>
        <div
          className="calculator_button"
          id="three"
          value="3"
          onClick={this.props.handleNumber}
        >
          3
        </div>
        <div
          className="calculator_button calculator_operator"
          id="add"
          value="+"
          onClick={this.props.handleOperator}
        >
          +
        </div>
        <div
          className="calculator_button"
          id="zero"
          value="0"
          onClick={this.props.handleNumber}
        >
          0
        </div>
        <div
          className="calculator_button"
          id="decimal"
          onClick={this.props.handleDecimal}
        >
          .
        </div>
        <div
          className="calculator_button calculator_operator"
          id="equals"
          onClick={this.props.handleEvaluate}
        >
          =
        </div>
      </div>
    );
  }
}

export default CalculatorPad;
