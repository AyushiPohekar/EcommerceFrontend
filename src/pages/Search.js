import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../components/Context/search";
import { API } from "../global";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>

          <div className="d-flex flex-wrap homepageproductlist">
            {values?.results.map((p) => {
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
      </div>
    </Layout>
  );
};

export default Search;
