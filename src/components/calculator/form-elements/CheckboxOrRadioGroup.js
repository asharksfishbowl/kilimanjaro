import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (
  <div>
    <label>{props.title}</label>
    <div className="form-row inline">
      {props.options.map(opt => {
        return (
          <label
            key={opt}
            className="label--radio"
          >
            <input
              className="redio"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={ props.selectedOptions.indexOf(opt) > -1 }
              type={props.type} /> {opt}
          </label>
        );
      })}
    </div>
  </div>
);

CheckboxOrRadioGroup.propTypes = {  
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.string,
  controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
