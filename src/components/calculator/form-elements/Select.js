import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
  <div className="form-row">
    <label>{props.title}</label>
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}>
      {props.options.map(opt => {
        return (
          <option
            key={opt.value}
            value={opt.value}>{opt.option}</option>
        );
      })}
    </select>
  </div>
);

Select.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Select;  
