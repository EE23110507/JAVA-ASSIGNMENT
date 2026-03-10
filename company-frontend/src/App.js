import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyList from "./pages/CompanyList";
import AddCompany from "./pages/AddCompany";
import EditCompany from "./pages/EditCompany";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/add" element={<AddCompany />} />
        <Route path="/edit/:id" element={<EditCompany />} />
      </Routes>
    </Router>
  );
}

export default App;