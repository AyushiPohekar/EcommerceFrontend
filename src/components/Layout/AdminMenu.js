import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import '../../pages/admin/admin.css';

const AdminMenu = () => {
  const navigate=useNavigate();

  return (
    <>
    <div className="list-group adminlistGroup">
   <h4 onClick={()=>navigate('/dashboard/admin')} className='adminpanel'>Admin Panel</h4>
   <hr />
    <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action adminlistGroup">Create Category</NavLink>
    <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action adminlistGroup">Create Product</NavLink>
    <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action adminlistGroup">Products</NavLink>
    <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action adminlistGroup">Orders</NavLink>
    {/* <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action adminlistGroup">Users</NavLink> */}
  
  </div>
    
    
    
    
    </>
  )
}

export default AdminMenu