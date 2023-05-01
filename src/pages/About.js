import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us- Ecommerce"}>
      <div class="container ContactUs ">
        <div class="row ContactUsrow">
          <div class=" col-md-6">
            <img
              src="https://creativmomentum.com/wp-content/uploads/2020/09/qualis-web-design-about-us.gif"
              alt="ContactUs"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class="col-md-6 ContactUsRight">
            <div className="ContactUsRightdiv">
              <h1 class="ContactUsTitle">About Us</h1>
              <p>
                Welcome to YourShop, your one-stop-shop for all your products .
                We take pride in offering a wide range of options that cater to
                daily needs. Our team is made up of experts in their field, who
                are committed to providing you with the best possible
                experience. We understand that how difficult it is in busy life
                to go physically in shops, and we work tirelessly to ensure that
                your shopping experience is as seamless as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
