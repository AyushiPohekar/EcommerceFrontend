import React, { useState } from "react";
import "../Pages.css";
import Layout from "../../components/Layout/Layout";
import {  toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
   e.preventDefault();
   console.log(name,email,password,phone,address);

   try {
    const res = await axios.post("/api/v1/auth/register", {
      name,
      email,
      password,
      phone,
      address
     
    });
    if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setTimeout(() => {
           navigate('/login');
          }, 5000);
     
     
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
 
    

  return (
    <Layout title={"Register-Ecommerce App"}>
      <div className="registerContainer">
        <form style={{width:"30%"}} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputphone" className="form-label">
             Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputphone"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputaddress" className="form-label">
             Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputaddress"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary Registerbtn">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
