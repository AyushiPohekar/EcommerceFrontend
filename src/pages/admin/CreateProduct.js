import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import './admin.css';
const CreateProduct = () => {
  return (
    <Layout title={'Dashboard-create product'}>
    <div className="container-fluid AdminDasboardContainer">
    <div className='row AdminDasboardRow'>
    <div className='col-md-3 AdminDasboardConlumnLeft'>
    <AdminMenu/>
    
    </div>
    <div className='col-md-6'>
    <h1>All users</h1>
    </div>
    </div>
    </div>
   
    </Layout>
  )
}

export default CreateProduct