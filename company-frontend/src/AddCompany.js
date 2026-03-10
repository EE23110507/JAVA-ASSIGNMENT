import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddCompany() {

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
    if (id) {
      axios.get(`http://localhost:9088/api/companies/${id}`)
        .then(res => setCompany(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const saveCompany = (e) => {
    e.preventDefault();

    if (id) {
      axios.put(`http://localhost:9088/api/companies/${id}`, company)
        .then(() => navigate("/"));
    } else {
      axios.post("http://localhost:9088/api/companies", company)
        .then(() => navigate("/"));
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {id ? "Edit Company" : "Add Company"}
        </h2>

        <form onSubmit={saveCompany}>

          <input name="companyName" placeholder="Company Name"
            value={company.companyName} onChange={handleChange}
            style={styles.input} />

          <input name="email" placeholder="Email"
            value={company.email} onChange={handleChange}
            style={styles.input} />

          <input name="phone" placeholder="Phone"
            value={company.phone} onChange={handleChange}
            style={styles.input} />

          <input name="website" placeholder="Website"
            value={company.website} onChange={handleChange}
            style={styles.input} />

          <input name="industry" placeholder="Industry"
            value={company.industry} onChange={handleChange}
            style={styles.input} />

          <input name="gstNumber" placeholder="GST Number"
            value={company.gstNumber} onChange={handleChange}
            style={styles.input} />

          <input name="address" placeholder="Address"
            value={company.address} onChange={handleChange}
            style={styles.input} />

          <input name="city" placeholder="City"
            value={company.city} onChange={handleChange}
            style={styles.input} />

          <input name="state" placeholder="State"
            value={company.state} onChange={handleChange}
            style={styles.input} />

          <input name="country" placeholder="Country"
            value={company.country} onChange={handleChange}
            style={styles.input} />

          <input name="postalCode" placeholder="Postal Code"
            value={company.postalCode} onChange={handleChange}
            style={styles.input} />

          <select name="status"
            value={company.status}
            onChange={handleChange}
            style={styles.input}>

            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button type="submit" style={styles.button}>
            {id ? "Update Company" : "Save Company"}
          </button>

        </form>
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
    maxWidth: "600px",
    margin: "auto",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "none"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    backgroundImage: "linear-gradient(45deg, #ff512f, #dd2476)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default AddCompany;