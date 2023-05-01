import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../../global";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  //get All products

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //lifeCycle method

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="container-fluid AdminDasboardContainer">
        <div className="row AdminDasboardRow">
          <div className="col-md-3 AdminDasboardConlumnLeft">
            <AdminMenu />
          </div>
          <div className="col-md-6 productlistRight">
            <h1>All Products List</h1>
            <div className="productlistdiv">
              {products?.map((p) => {
                return (
                  <>
                    <Link to={`/dashboard/admin/product/${p.slug}`}   key={p._id} className="productcardlink">
                      <div
                        className="card productcard"
                        style={{ width: "18rem" }}
                      
                      >
                        <img
                        src={`${API}/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top productcardimg"
                          alt={p.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                          <p className="card-text">{p.description}</p>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
