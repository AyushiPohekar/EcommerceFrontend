import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API } from "../global";

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
const [relatedProducts,setRelatedProducts]=useState([])
  useEffect(() => {
    if (params?.slug) getProductDetails();
  }, [params?.slug]);
  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };



//get similar product
const getSimilarProduct = async (pid, cid) => {
  try {
    const { data } = await axios.get(
      `${API}/api/v1/product/related-product/${pid}/${cid}`
    );
    setRelatedProducts(data?.products);
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
                src={`${API}/api/v1/product/product-photo/${product._id}`}
                className="card-img-top productDetailsImg "
                alt={product.name}
              />
            </div>
            <div className="productDetailsAboutDiv">
              <h6 className="productDetailsAboutDivTitle">About Product</h6>
              <p>→ Description: {product.description}</p>
              <p>→ Category: {product.category?.name}</p>
         
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
      <div className="d-flex flex-wrap homepageproductlist">
      {relatedProducts?.map((p) => {
        return (
          <>
            <div
              className="card productcard"
              style={{ width: "18rem" }}
              key={p._id}
            
            >
              <img
                src={`${API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top productcardimg"
                style={{ cursor: "pointer" }}
                alt={p.name}
              
               />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>

                <div className="classbodydowndiv">
                  <p>&#x20B9;{p.price}</p>
                  <button className="addtocartbtn">Add to Cart</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>

      
      </div>
     
    </Layout>
  );
};

export default ProductDetails;
