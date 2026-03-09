import React,{useState} from "react";
import {createCompany,updateCompany} from "../api/companyApi";

function CompanyFormModal({close,refresh,editData}){

const [form,setForm]=useState(
editData || {
companyName:"",
email:"",
phone:"",
website:"",
industry:"",
gstNumber:"",
address:"",
city:"",
state:"",
country:"",
postalCode:"",
status:"Active"
}
);

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const submit=(e)=>{
e.preventDefault();

if(editData){

updateCompany(editData.id,form).then(()=>{
alert("Company Updated");
refresh();
close();
});

}else{

createCompany(form).then(()=>{
alert("Company Added");
refresh();
close();
});

}

};

return(

<div className="modal">

<form className="modalContent" onSubmit={submit}>

<h2>{editData?"Edit Company":"Add Company"}</h2>

<input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} required/>

<input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>

<input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}/>

<input name="website" placeholder="Website" value={form.website} onChange={handleChange}/>

<input name="industry" placeholder="Industry" value={form.industry} onChange={handleChange}/>

<input name="gstNumber" placeholder="GST Number" value={form.gstNumber} onChange={handleChange}/>

<input name="address" placeholder="Address" value={form.address} onChange={handleChange}/>

<input name="city" placeholder="City" value={form.city} onChange={handleChange}/>

<input name="state" placeholder="State" value={form.state} onChange={handleChange}/>

<input name="country" placeholder="Country" value={form.country} onChange={handleChange}/>

<input name="postalCode" placeholder="Postal Code" value={form.postalCode} onChange={handleChange}/>

<select name="status" value={form.status} onChange={handleChange}>
<option>Active</option>
<option>Inactive</option>
</select>

<button type="submit">Save</button>

<button type="button" onClick={close}>Cancel</button>

</form>

</div>

)

}

export default CompanyFormModal;