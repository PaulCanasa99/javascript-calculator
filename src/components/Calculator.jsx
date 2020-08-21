import React, { Component } from 'react';
import './Calculator.css';
import CalculatorPad from './CalculatorPad';
const isOperator = /[x/+-]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /[x/+]‑$/;
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '0',
      prevVal: '0',
      formula: '',
      evaluated: false,
    };
  }

  handleClear = () => {
    this.setState({
      currentVal: '0',
      prevVal: '0',
      formula: '',
      evaluated: false,
    });
  };
  handleNumber = (e) => {
    const value = document.getElementById(e.target.id).getAttribute('value');
    if (this.state.evaluated) {
      this.setState({
        currentVal: value,
        formula: value,
        evaluated: false,
      });
    } else {
      this.setState({
        currentVal:
          this.state.currentVal === '0' ||
          isOperator.test(this.state.currentVal)
            ? value
            : this.state.currentVal + value,
        formula: this.state.formula + value,
      });
    }
  };
  handleOperator = (e) => {
    const operator = document.getElementById(e.target.id).getAttribute('value');
    if (this.state.evaluated) {
      this.setState({
        formula: this.state.prevVal + operator,
        currentVal: operator,
        evaluated: false,
      });
    } else {
      let expression = this.state.formula;
      if (expression[expression.length - 1] === '-') {
        expression = expression.slice(0, -1);
        console.log('ctm');
      }
      if (endsWithOperator.test(expression) && operator !== '-') {
        expression = expression.slice(0, -1);
      }
      this.setState({
        formula: expression + operator,
        currentVal: operator,
      });
    }
  };
  handleDecimal = () => {
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: '0.',
        formula: '0.',
        evaluated: false,
      });
    } else if (!this.state.currentVal.includes('.')) {
      this.setState({ evaluated: false });
      if (
        endsWithOperator.test(this.state.formula) ||
        (this.state.currentVal === '0' && this.state.formula === '')
      ) {
        this.setState({
          currentVal: '0.',
          formula: this.state.formula + '0.',
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
          formula: this.state.formula + '.',
        });
      }
    }
  };
  handleEvaluate = () => {
    if (!this.state.evaluated) {
      let expression = this.state.formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, '*').replace(/‑/g, '-');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formula:
          expression.replace(/\*/g, 'x').replace(/-/g, '‑') + '=' + answer,
        prevVal: answer,
        evaluated: true,
      });
    }
  };
  render() {
    return (
      <div className="calculator_body">
        <div className="display">
          <div className="calculator_formula">{this.state.formula}</div>
          <div className="calculator_result" id="display">
            {this.state.currentVal}
          </div>
        </div>
        <CalculatorPad
          handleNumber={this.handleNumber}
          handleClear={this.handleClear}
          handleOperator={this.handleOperator}
          handleEvaluate={this.handleEvaluate}
          handleDecimal={this.handleDecimal}
        />
      </div>
    );
  }
}

export default Calculator;
