import React,{useEffect,useState} from "react";
import "../App.css";
import {getCompanies,deleteCompany} from "../api/companyApi";
import CompanyFormModal from "../components/CompanyFormModal";

function CompanyDashboard(){

const [companies,setCompanies]=useState([]);
const [showModal,setShowModal]=useState(false);
const [editData,setEditData]=useState(null);

useEffect(()=>{
loadCompanies();
},[]);

const loadCompanies=()=>{
getCompanies().then(res=>{
setCompanies(res.data);
});
};

const removeCompany=(id)=>{
deleteCompany(id).then(()=>{
loadCompanies();
});
};

const editCompany=(company)=>{
setEditData(company);
setShowModal(true);
};

const total = companies.length;
const active = companies.filter(c=>c.status==="Active").length;
const inactive = companies.filter(c=>c.status==="Inactive").length;

return(

<div className="container">

<h1>Company Dashboard</h1>

<div className="topBar">

<button
className="addBtn"
onClick={()=>{setEditData(null);setShowModal(true)}}
>
+ Add Company
</button>

</div>

<div className="cards">

<div className="card total">
<h3>Total Companies</h3>
<h2>{total}</h2>
</div>

<div className="card active">
<h3>Active Companies</h3>
<h2>{active}</h2>
</div>

<div className="card inactive">
<h3>Inactive Companies</h3>
<h2>{inactive}</h2>
</div>

</div>

<table>

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>City</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{companies.map(c=>(
<tr key={c.id}>

<td>{c.companyName}</td>
<td>{c.email}</td>
<td>{c.phone}</td>
<td>{c.city}</td>

<td>
<span className={c.status==="Active"?"badge activeBadge":"badge inactiveBadge"}>
{c.status}
</span>
</td>

<td>

<button
className="editBtn"
onClick={()=>editCompany(c)}
>
Edit
</button>

<button
className="deleteBtn"
onClick={()=>removeCompany(c.id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

{showModal &&
<CompanyFormModal
close={()=>setShowModal(false)}
refresh={loadCompanies}
editData={editData}
/>
}

</div>

)

}

export default CompanyDashboard;