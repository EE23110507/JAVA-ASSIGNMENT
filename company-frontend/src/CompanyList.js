import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = () => {
    axios
      .get("http://localhost:9088/api/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.log(err));
  };

  const deleteCompany = (id) => {
    axios
      .delete(`http://localhost:9088/api/companies/${id}`)
      .then(() => loadCompanies());
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={{ color: "#fff", margin: 0 }}>Company List</h2>
          <button
            style={styles.addBtn}
            onClick={() => navigate("/add-company")}
          >
            + Add Company
          </button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td style={styles.td}>{company.id}</td>
                <td style={styles.td}>{company.companyName}</td>
                <td style={styles.td}>{company.email}</td>
                <td style={styles.td}>{company.phone}</td>
                <td style={styles.td}>
                  <span
                    style={
                      company.status === "Active"
                        ? styles.active
                        : styles.inactive
                    }
                  >
                    {company.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.editBtn}
                    onClick={() =>
                      navigate(`/edit-company/${company.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteCompany(company.id)}
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

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    backgroundImage: "linear-gradient(135deg, #1f4037, #99f2c8)"
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },

  addBtn: {
    padding: "8px 18px",
    borderRadius: "25px",
    border: "none",
    backgroundImage: "linear-gradient(45deg, #ff512f, #dd2476)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    tableLayout: "fixed"
  },

  th: {
    padding: "12px",
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold"
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
    wordWrap: "break-word"
  },

  active: {
    backgroundColor: "green",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "20px"
  },

  inactive: {
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "20px"
  },

  editBtn: {
    marginRight: "8px",
    padding: "5px 10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    cursor: "pointer"
  },

  deleteBtn: {
    padding: "5px 10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#e74c3c",
    color: "#fff",
    cursor: "pointer"
  }
};

export default CompanyList;