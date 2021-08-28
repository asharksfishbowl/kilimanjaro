import React, { Component } from 'react';
import SingleInput from './form-elements/SingleInput';
import Select from './form-elements/Select';
import CheckboxOrRadioGroup from './form-elements/CheckboxOrRadioGroup';
import Result from './Result';

export default class Calculator extends Component {

    renderResult(){
        if(this.props.intState){
          return (
            <Result {...this.props}/>
          )
        }
    }

    render() {
        return (
            <div className="calculator">
                <form onSubmit={ this.props.handleSubmit }>

                    <SingleInput
                        title="Age"
                        name="age"
                        inputType={'text'}
                        content={this.props.age}
                        controlFunc={this.props.handleChange}
                        placeholder="Age"
                        required={true}
                    />

                    <button href="#" onClick={this.props.handleHeightToggle} disabled={!this.props.feetRow}>Cm</button>
                    <button href="#" onClick={this.props.handleHeightToggle} disabled={!this.props.cm}>Feet</button>

                    {(this.props.cm) &&
                        <SingleInput
                            title="Height (cm)"
                            name="height"
                            inputType={'text'}
                            content={this.props.height}
                            controlFunc={this.props.handleChange}
                            placeholder="Height"
                            required={true}
                        />
                    }

                    {(this.props.feetRow) &&
                        <div className="feet">
                            <SingleInput
                                title="Height (feet)"
                                name="feet"
                                inputType={'text'}
                                content={this.props.feet}
                                controlFunc={this.props.handleChange}
                                placeholder="Feet"
                                required={true}
                            />

                            <SingleInput
                                title="Height (inches)"
                                name="inches"
                                inputType={'text'}
                                content={this.props.inches}
                                controlFunc={this.props.handleChange}
                                placeholder="Inches"
                                required={true}
                            />
                        </div>
                    }

                    <button href="#" onClick={this.props.handleWeightToggle} disabled={!this.props.lbs}>Kg</button>
                    <button href="#" onClick={this.props.handleWeightToggle} disabled={!this.props.kg}>Lbs</button>

                    {(this.props.kg) &&
                        <SingleInput
                            title="Weight (kg)"
                            name="weight"
                            inputType={'text'}
                            content={this.props.weight}
                            controlFunc={this.props.handleChange}
                            placeholder="Weight kg"
                            required={true}
                        />
                    }

                    {(this.props.lbs) &&
                        <SingleInput
                            title="Weight (lbs)"
                            name="weight"
                            inputType={'text'}
                            content={this.props.weight}
                            controlFunc={this.props.handleChange}
                            placeholder="Weight lbs"
                        />
                    }

                    <CheckboxOrRadioGroup
                        title={'Gender:'}
                        setName={'gender'}
                        type={'radio'}
                        controlFunc={this.props.handleChange}
                        options={this.props.genderSelections}
                        selectedOptions={this.props.gender}
                    />

                    <Select
                        title="Activity Level"
                        name={'activityLevel'}
                        placeholder={'Choose your activity level'}
                        controlFunc={this.props.handleChange}
                        options={this.props.activityLevelOptions}
                    />

                    <CheckboxOrRadioGroup
                        title={'Goal:'}
                        setName={'goal'}
                        type={'radio'}
                        controlFunc={this.props.handleChange}
                        options={this.props.goalSelections}
                        selectedOptions={this.props.goal}
                    />

                    <button type="submit">Submit</button>

                </form>

                {this.renderResult()}

            </div>
        )
    }
}
