import React from "react";

const RadioButton = ({ label, value, checked, onChange, name }) => {
  return (
    <label className="inline-flex items-center mr-4 cursor-pointer">
      <div className="relative">
        <input
          type="radio"
          className="hidden"
          value={value}
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <div
          className={`w-5 h-5 rounded-full border ${
            checked ? "border-purple-600" : "border-gray-400"
          } flex items-center justify-center`}
        >
          {checked && (
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          )}
        </div>
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );
};
export default RadioButton;
