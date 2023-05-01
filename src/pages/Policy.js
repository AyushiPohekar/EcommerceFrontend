import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"PrivacyPolicy- Ecommerce"}>
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
              <h1 class="ContactUsTitle">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
