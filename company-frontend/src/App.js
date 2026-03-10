import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyList from "./CompanyList";
import AddCompany from "./AddCompany";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/edit-company/:id" element={<AddCompany />} />
      </Routes>
    </Router>
  );
}

export default App;