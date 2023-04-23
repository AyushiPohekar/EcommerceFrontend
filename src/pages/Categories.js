import React from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const Categories = () => {
  const categories = useCategory();
  console.log(categories);
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <h1>Explore By Categories</h1>
        <div className="row">
            
          {categories?.map((c) => {
            return (
                <>
                <div className="card ">
                    <h6>{c.name}</h6>
                </div>
              <div className="col-md-6" key={c._id}>
                <button>
                  <Link to={`/category/${c._id}`}>{c.name}</Link>
                </button>
               
              </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
