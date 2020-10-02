
import React from 'react';
import './Step.css';

function Step(props) {

    return (
        <div className="step-counter">
            <p>Krok:</p>
            <input type="number" value={props.stepValue} onChange={props.setStepValue} />
        </div>
    );
}

export default Step;