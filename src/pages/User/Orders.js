import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
  return (
   <Layout title={'Dashboard-Orders'}>
   <div className='container-fluid UserDasboardContainer'>
   <div className='row UserDasboardRow'>
   <div className='col-md-3 UserDasboardConlumnLeft'>
   <UserMenu/>
   </div>
   <div className='col-md-9'>
   <h1>All orders</h1>
   </div>
   </div>
   </div>
 
 
   </Layout>
  )
}

export default Orders