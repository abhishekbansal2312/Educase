import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-6 py-8">
      <div className="flex-grow"></div>
      <div className="mt-auto w-72">
        <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-auto">
        <div className="mb-4">
          <Button
            text="Create Account"
            onClick={() => navigate("/create-account")}
          />
        </div>
        <div>
          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
