import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import RadioButton from "../components/RadioButton";
import Button from "../components/Button";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      agency: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl w-44 font-bold mb-2">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <FormInput
          label="Full Name"
          placeholder="Marry Doe"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Phone number"
          type="tel"
          placeholder="Marry Doe"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email address"
          type="email"
          placeholder="Marry Doe"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Marry Doe"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Company name"
          placeholder="Marry Doe"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <div className="mb-6">
          <p className="text-sm text-purple-600 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex">
            <RadioButton
              label="Yes"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleRadioChange}
              name="agency"
            />
            <RadioButton
              label="No"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleRadioChange}
              name="agency"
            />
          </div>
        </div>

        <div className="mt-auto">
          <Button text="Create Account" />
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
