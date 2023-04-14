import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../pages/admin/admin.css'
const AdminMenu = () => {
  return (
    <>
    <div className="list-group adminlistGroup">
   <h4>Admin Panel</h4>
   <hr />
    <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action adminlistGroup">Create Category</NavLink>
    <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action adminlistGroup">Create Product</NavLink>
    <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action adminlistGroup">Users</NavLink>
  
  </div>
    
    
    
    
    </>
  )
}

export default AdminMenu