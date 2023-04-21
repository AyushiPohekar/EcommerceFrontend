import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});
  console.log(product._id);
  useEffect(() => {
    if (params?.slug) getProductDetails();
  }, [params?.slug]);
  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container-fluid productDetailContainer">
        <div className="row  productDetailRow">
          <div className="col-md-6">
            <div className="card productDetailsCard">
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                className="card-img-top productDetailsImg "
                alt={product.name}
              />
            </div>
            <div className="productDetailsAboutDiv">
              <h6 className="productDetailsAboutDivTitle">About Product</h6>
              <p>Description:{product.description}</p>
            </div>
          </div>
          <div className="col-md-6 productdetailsdivright">
            <h3>{product.name}</h3>
            <h3>₹ {product.price}</h3>
            <button className="btn ProductDetailsbtn">Add to Cart</button>
            <hr />
            <h4>How it works</h4>
            <div className="productdetailsrightbottom">
              <img src="https://cdn.zeptonow.com/mweb-prod/images/pdp/place-order.svg"></img>
              <div>
                <h5>Place an order</h5>
                <p>Choose from a wide range of daily essentials</p>
              </div>
            </div>
        
            <div className="productdetailsrightbottom">
              <img src="https://cdn.zeptonow.com/mweb-prod/images/pdp/do-not-blink.svg"></img>
              <div>
                <h5>Don't Blink</h5>
                <p>Our delivery partner will be at your door</p>
              </div>
            </div>
            
            <div className="productdetailsrightbottom">
              <img src="https://cdn.zeptonow.com/mweb-prod/images/pdp/enjoy.svg"></img>
              <div>
                <h5>Enjoy</h5>
                <p>Boom! You'll never have to wait for groceries again</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ProductDetailsSimilar">
      <h4>Similar Product</h4>
      <div>Product List</div>
      
      
      </div>
      <div className="row productdetailsCategories">
      <h4>Categories</h4></div>
    </Layout>
  );
};

export default ProductDetails;
