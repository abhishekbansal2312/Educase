import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Enable button only if both fields have values
    setIsButtonDisabled(!(newFormData.email && newFormData.password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    navigate("/account-settings");
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="mt-6">
          <Button
            text="Login"
            variant={isButtonDisabled ? "disabled" : "primary"}
            disabled={isButtonDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
