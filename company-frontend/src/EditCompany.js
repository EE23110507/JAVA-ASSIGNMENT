import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCompany() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    companyName: "",
    email: "",
    phone: "",
    status: "Active"
  });

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await axios.get(`http://localhost:9088/api/companies/${id}`);
    setCompany(result.data);
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const updateCompany = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9088/api/companies/${id}`, company);
    alert("Company Updated Successfully");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Company</h2>
      <form onSubmit={updateCompany}>
        <input name="companyName" value={company.companyName} onChange={handleChange} required /><br />
        <input name="email" value={company.email} onChange={handleChange} required /><br />
        <input name="phone" value={company.phone} onChange={handleChange} /><br />

        <select name="status" value={company.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditCompany;