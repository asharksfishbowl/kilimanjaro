import React from 'react';
import { Button } from '@material-ui/core';


const Result = (props) => (
    <div className="result">
        <h3>{props.calories} calories per day</h3>
        <div className="macronutrients">
            <div><span>protein</span> {props.protein}g</div>
            <div><span>fat</span> {props.fat}g</div>
            <div><span>carbs</span> {props.carbs}g</div>
        </div>
        <h4>
          <Button
            fullWidth
            fullHeight
            variant="contained"
            color="primary"
            href="/SignUp"
          >
            Sign Up for a free 30 day challenge!
          </Button>
        </h4>
    </div>
)

export default Result;
