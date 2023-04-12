import React from 'react'
import Layout from '../components/Layout/Layout';
import {BiMailSend, BiPhoneCall, BiSupport} from "react-icons/bi";
import './Pages.css'
const Contact = () => {
  return (
    <Layout title={'Contact us- Ecommerce'}>
    <div class="container ContactUs ">
    <div class="row ContactUsrow">
      <div class=" col-md-6">
    <img src='https://creativmomentum.com/wp-content/uploads/2020/09/qualis-web-design-about-us.gif' alt='ContactUs' style={{width:"100%",height:"100%"}}/>
      </div>
      <div class="col-md-6 ContactUsRight">
 

   <div className='ContactUsRightdiv'>
   <h1 class='ContactUsTitle'>Contact Us</h1>
   <p>For query about the product,Feel free to call!</p>
   <p><BiMailSend/> : www.yourshop@ecommerce.com</p>
   <p><BiPhoneCall/> : 0123-123456789</p>
   <p><BiSupport/> : 1800-666-444(Toll Free)</p>
   </div>
   </div>
      </div>
     
    

  </div>
    </Layout>
  )
}

export default Contact