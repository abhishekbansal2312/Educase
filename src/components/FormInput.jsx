import React from "react";

const FormInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  name,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-purple-600 text-sm mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
        required={required}
      />
    </div>
  );
};

export default FormInput;
