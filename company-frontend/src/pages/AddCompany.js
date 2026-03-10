import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../services/CompanyService";

function AddCompany() {
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    companyName: "",
    email: "",
    phone: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCompany(company);
    alert("Company Added Successfully!");
    navigate("/");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">
        <div className="card-body p-4">

          <h3 className="text-center text-success mb-4 fw-bold">
            Add Company
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button className="btn btn-success w-100 shadow">
              Save Company
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

export default AddCompany;