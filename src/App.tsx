import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/home_page";

const App: React.FC = () => {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px",
          background: "#F4F4F4",
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* <Link to="/">front</Link>
        <Link to="/dashboard">dashboard</Link> */}
      </nav>
      
       <Routes>
        {/* ✅ Show Front first */}
        <Route path="/" element={<HomePage />} />  
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
export default App;