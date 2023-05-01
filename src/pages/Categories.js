import React from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link, useNavigate } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const Categories = () => {
  const categories = useCategory();
  const navigate=useNavigate();
  console.log(categories);
  return (
    <Layout title={"All Categories"}>
      <div className="container AllCategoriesContainer">
        <h1>Explore By Categories</h1>
        <div className="row AllCategoriesRow">
            
          {categories?.map((c) => {
            return (
                <>
                <div className="card AllCategoriesCard" onClick={()=>navigate(`/category/${c.slug}`)}>
                    <h6>{c.name}</h6>
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
