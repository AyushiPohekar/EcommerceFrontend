import React from 'react'
import Layout from '../components/Layout/Layout'
import './Pages.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate=useNavigate();
  return (
    <Layout>
    <div className='pageNotFoundCpontainer'>
    <h1 >404</h1>
    <p >It seems that you are lost in perpetual black hole. let us help guide you out and get back you to home page</p>
    <button onClick={()=>navigate('/')}>Home</button>
    
    </div>
   
    </Layout>
  )
}

export default PageNotFound