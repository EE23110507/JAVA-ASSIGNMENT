import React, { useEffect, useState } from "react";
import { getCompanies, deleteCompany } from "../services/CompanyService";
import { Link } from "react-router-dom";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const result = await getCompanies();
    setCompanies(result.data);
  };

  const handleDelete = async (id) => {
    await deleteCompany(id);
    loadCompanies();
  };

  return (
    <div className="container mt-5">
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Company Management</h2>
        <Link to="/add" className="btn btn-success">
          + Add Company
        </Link>
      </div>

      <div className="card shadow-lg p-3">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id}>
                <td>{c.companyName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <span
                    className={
                      c.status === "Active"
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/edit/${c.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyList;