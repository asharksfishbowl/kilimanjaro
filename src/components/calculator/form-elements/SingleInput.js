import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
  <div className="form-row">
    <label>{props.title}</label>
    <input
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      required={props.required}
      />
  </div>
);

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SingleInput;  
