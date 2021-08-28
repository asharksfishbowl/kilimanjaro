// Formulas
// For males:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE
// For females:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 = REE

// Sedentary REE X 1.2
// Light activity REE x 1.375
// Moderate activity REE x 1.55
// Very Active REE x 1.725

//  Lose - 20%
// 3,250 – (3250 x .20) = Weight Loss TDEE
// Gain + 20%
// 3,250 + (3250 x .20) = Weight Gain TDEE

// Example
// Let’s say you’re a 29-year-old, 183 cm, 88 kg, very active male.
// (10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE) x 1.725 = TDEE
// 10 x 88 + 6.25 x 183 – 5 x 29 + 5 = REE
// 880 + 1144 – 145 + 5 = 1884 (REE)
// 1884 x 1.725 = 3250 (Very Active TDEE)

// 1g Protein = 4 Calories
// 1g Carbohydrate = 4 Calories
// 1g Fat = 9 Calories

import React, { Component } from 'react';
import * as func from './helper-functions';
import Calculator from './Calculator';

import './styles/global.scss';

class CalculatorForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      intState: false,
      age: '',
      height: '',
      cm: true,
      feetRow: false,
      feet: '',
      inches: '',
      weight: '',
      kg: true,
      lbs: false,
      gender: 'Male',
      genderSelections: ['Male', 'Female'],
      goal: 'Maintain',
      goalSelections: ['Maintain', 'Lose', 'Gain'],
      calories: '',
      activityLevel: 'sedentary',
      activityLevelOptions: [
        {
          value:'sedentary',
          option: 'Sedentary'
        },
        {
          value: 'lightActivity',
          option: 'Light activity'},
        {
          value: 'moderateActivity',
          option: 'Moderate activity'
        },
        {
          value: 'veryActive',
          option: 'Very Active'
        }
      ],
      activityLevelSelection: 'Sedentary',
      protein: '',
      fat: '',
      carbs: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getResult = this.getResult.bind(this);
    this.handleWeightToggle = this.handleWeightToggle.bind(this);
    this.handleHeightToggle = this.handleHeightToggle.bind(this);
  }

  getResult(){
      // Get Activily level
      const activityLevel = func.getActivityLevel(this.state.activityLevel);

      if(this.state.feetRow){
        const height = func.feetToCm(this.state.feet, this.state.inches).slice(0, 3);
        console.log(height);
        this.setState({
          height
        })
      }

      // Get REE ( Resting energy expenditure )
      let REE;
      if(this.state.kg){
        REE = func.getREE(this.state.weight, this.state.height, this.state.age, this.state.gender);
      }else{
        const weightKg = func.lbsToKg(this.state.weight);
        REE = func.getREE(weightKg, this.state.height, this.state.age, this.state.gender);
      }

      // Convert kg to lbs
      let weightLbs = this.state.weight;
      if(this.state.kg){
        weightLbs = func.getKilos(this.state.weight);
      }else{
        weightLbs = this.state.weight;
      }

      // Get TDEE ( Total Daily Energy Expenditure )
      const TDEE = func.getTDEE(REE, activityLevel);
      console.log('TDEE', TDEE);

      // Get calories based on users goal (maintain, lose, gain weight)
      const calories = func.getGoal(this.state.goal, TDEE);

      // const inches = func.feetToCm(this.state.feet, this.state.inches);
      // console.log(inches);

      // Get grams of protein at .825 body weight in lbs
      const protein = func.getProtein(weightLbs);
      // Get calories from protein
      const proteinCalories = func.proteinCalories(protein);

      // Get grams of fat
      const fat = func.getFat(calories);
      // Get calories from fat
      const fatCalories = func.fatCalories(fat);

      // Get leftover calories for carbs
      const calorieBalance = func.calorieBalance(proteinCalories, fatCalories, calories);

      // Get carbs
      const carbs = func.getTotalCarbs(calorieBalance);

      // Update state with new result
      this.setState({
        intState: true,
        calories,
        protein,
        fat,
        carbs
      })
  }

  handleSubmit(e){
    e.preventDefault();
    this.getResult();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleWeightToggle(e){
    e.preventDefault();
    this.setState({
      kg: !this.state.kg,
      lbs: !this.state.lbs
    })
  }

  handleHeightToggle(e) {
    e.preventDefault();
    this.setState({
      cm: !this.state.cm,
      feetRow: !this.state.feetRow
    })
  }

  render() {
    return (
      <div className="CalculatorForm">
        <Calculator
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleWeightToggle={this.handleWeightToggle}
          handleHeightToggle={this.handleHeightToggle}
          {...this.state}
        />
      </div>
    );
  }
}

export default CalculatorForm;
