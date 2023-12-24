import React, { useState } from "react";
import "./FormInput.css";
export default function FormInput(props) {
  const { id, placeholder, requiredMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
    setFocused((prev) => !prev);
  };
  return (
    <>
      <label htmlFor={id}>{placeholder}</label>
      <input
        {...inputProps}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        focused={focused.toString()}
        onFocus={() => placeholder === "Confirm password" && setFocused(true)}
      />
      <span>{requiredMessage}</span>
    </>
  );
}
