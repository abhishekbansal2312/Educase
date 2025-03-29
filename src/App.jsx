import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ClickMatrix from "./components/ClickMatrix";

const App = () => {
  return (
    <Router>
      <ClickMatrix />
    </Router>
  );
};

export default App;
