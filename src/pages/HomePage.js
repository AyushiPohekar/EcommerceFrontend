import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../components/Context/auth";
import { Checkbox, Radio } from "antd";
import axios from "axios";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/Context/cart";
import { toast } from "react-hot-toast";
import { API } from "../global";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log(products);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/category/getallcategory`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Ecommerce"}>
      <div className="row mt-3">
        <div className="col-md-3 p-4 Filterdiv">
          <h4 className="p-2"> Filter By Category</h4>
          <div className="d-flex flex-column Filtercategorydiv">
          
            {categories?.map((c) => (
               <div>
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
              </div>
            ))}
          </div>
          {/* price filter */}
          <h4 className=" p-2 mt-4">Filter By Price</h4>
          <div className="d-flex flex-column Filtercategorydiv">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((pr) => (
                <div>
                  <Radio value={pr.array}>{pr.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn  restbtn"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 homepageproductlistdivright">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap homepageproductlist">
            {products?.map((p) => {
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
                      onClick={() => navigate(`/product/${p.slug}`)}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text ">
                        {p.description.substring(0, 60)}...
                      </p>

                      <div className="classbodydowndiv">
                        <p>&#x20B9;{p.price}</p>
                        <button
                          className="addtocartbtn"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            toast.success("Item Added to cart")
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
