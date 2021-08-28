import React from 'react';

const Result = (props) => (
    <div className="result">
        <h3>{props.calories} calories per day</h3>
        <div className="macronutrients">
            <div><span>protein</span> {props.protein}g</div>
            <div><span>fat</span> {props.fat}g</div>
            <div><span>carbs</span> {props.carbs}g</div>
        </div>
    </div>
)

export default Result;
