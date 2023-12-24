import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Form.css";

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      requiredMessage: "user name should be 3-16 letters",
      required: true,
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email",
      requiredMessage: "email should be invalid",
      required: true,
    },
    {
      id: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      id: "password",
      type: "text",
      placeholder: "Password",
      pattern: `^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$`,
      requiredMessage:
        "password should be containing at least eight characters, including at least one number and includes both lower and uppercase letters and special characters",
      required: true,
    },
    {
      id: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      pattern: values.password,
      requiredMessage: `don't match`,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: [e.target.value] });
  };
  console.log(values);

  return (
    <div className="container">
      <h1 className="form-title">Register</h1>
      <form action="" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={handleChange}
            value={values[input.id]}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
