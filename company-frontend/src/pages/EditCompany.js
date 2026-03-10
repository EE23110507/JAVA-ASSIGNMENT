import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCompanyById, updateCompany } from "../services/CompanyService";

function EditCompany() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [company, setCompany] = useState({
    companyName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    gstNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    status: "Active"
  });

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await getCompanyById(id);
    setCompany(result.data);
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCompany(id, company);
    alert("Company Updated Successfully!");
    navigate("/");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">
        <div className="card-body p-4">

          <h3 className="text-center text-warning fw-bold mb-4">
            Edit Company Details
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                value={company.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={company.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={company.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Website</label>
              <input
                type="text"
                name="website"
                className="form-control"
                value={company.website}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Industry</label>
              <input
                type="text"
                name="industry"
                className="form-control"
                value={company.industry}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">GST Number</label>
              <input
                type="text"
                name="gstNumber"
                className="form-control"
                value={company.gstNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={company.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={company.city}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                value={company.state}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                name="country"
                className="form-control"
                value={company.country}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                className="form-control"
                value={company.postalCode}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                value={company.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button className="btn btn-warning w-100 shadow">
              Update Company
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

export default EditCompany;