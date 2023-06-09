import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { API } from "../global";
const CategoryProduct = () => {
  const params = useParams();
  console.log(params.id)
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.id) getPrductsByCat();
  }, [params?.id]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/v1/product/product-category/${params.id}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2 productcard" key={p._id} style={{ width: "18rem" }}>
                  <img
                    src={`${API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top productcardimg"
                    alt={p.name}
                    style={{ cursor: "pointer" }}
                   
                    onClick={() => navigate(`/product/${p.slug}`)}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {/* {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })} */}
                        &#x20B9;{p.price}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                   
                      {/* <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button> */}
                      {/* <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button> */}
                    
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;