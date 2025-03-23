import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
    <Router>
      <div className="flex  justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md h-[680px] bg-gray-100 shadow-lg overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
