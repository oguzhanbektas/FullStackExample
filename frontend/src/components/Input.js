import React from "react";

const Input = (props) => {
  const { label, error, name, onChange, type } = props;
  const className = error ? "form-control is-invalid" : "form-control";
  return (
    <div className="form-group">
      <label> {props.label}</label>
      <input
        name={name}
        onChange={onChange}
        className={className}
        type={type}
      />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
};

export default Input;
