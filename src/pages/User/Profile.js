import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
const Profile = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[phone,setPhone]=useState("");
  const[address,setAddress]=useState("");
  return (
    <Layout title={'Dashboard-Profile'}>
    <div className='container-fluid UserDasboardContainer'>
    <div className='row UserDasboardRow '>
    <div className='col-md-3 UserDasboardConlumnLeft'>
    <UserMenu/>
    </div>
    <div className='col-md-9'>
    <h1>Profile</h1>
    </div>
    </div>
    </div>
  
  
    </Layout>
  )
}

export default Profile