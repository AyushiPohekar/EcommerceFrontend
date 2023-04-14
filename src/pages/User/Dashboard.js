import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../components/Context/auth';
import './User.css'
const Dashboard = () => {
  const [auth] = useAuth();
  console.log(auth);
  return (
    <Layout title={'Dashboard-Ecommerce App'}>
    
    
    <div className="container-fluid UserDasboardContainer">
    <div className="row UserDasboardRow">
      <div className="col-md-3 col-sm-8 UserDasboardConlumnLeft">
        <UserMenu />
      </div>
      <div className="col-md-7 col-sm-8">
        <div className="card w-75 p-3">
          <h3>User Name:{auth?.user?.name}</h3>
          <h3>User Email:{auth?.user?.email}</h3>
          <h3>User Contact: {auth?.user?.phone}</h3>
        </div>
      </div>
    </div>
  </div>
    </Layout>
  )
}

export default Dashboard