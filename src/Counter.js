// KOMPONENTY ZACZYNAJĄ SIĘ OD DUŻEJ LITERY;
// Funkcje też zaczynaja sie z duzej litery

import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1,
        };
    }

    changeValue = (action) => { // ES6 method

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });
        });
    }

    setStepValue = (event) => {
        console.log(event.target.value);
        this.setState({
            stepValue: parseInt(event.target.value)
        });
    }

    render() {
        return (
            <div className="counter">
                <p>Counter:</p>
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step stepValue={this.state.stepValue} setStepValue={this.setStepValue} />
            </div>
        );
    }
}

export default Counter;


// komponent klasowy
// class Counter extends Component {
//     render() {
//         let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//         return (
//             <div className="counter">
//                 Counter:
//                 <span className="value">
//                     {this.props.initValue}
//                 </span>
//             </div>
//         );
//     }
// }
// export default Counter;

// komponent funkcyjny
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
