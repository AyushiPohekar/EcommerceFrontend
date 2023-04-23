import React from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../components/Context/cart";
import { useAuth } from "../components/Context/auth";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };  
  
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

    //detele item
    const removeCartItem = (pid) => {
      try {
        let myCart = [...cart];
        let index = myCart.findIndex((item) => item._id === pid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <Layout title={"Cart"}>
      <div className="cart">
        <div className="container CartContainer">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
          <div className="row CartContainerRow">
            <div className="col-md-6 CartContainerLeft d-flex flex-column gap-3">
              {cart?.map((p) => {
                return (
                  <>
                    <div className="card cartCard">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top cartimg"
                        style={{ cursor: "pointer" }}
                        alt={p.name}
                        onClick={() => navigate(`/product/${p.slug}`)}
                      />
                      <div className="d-flex flex-column">
                        <p>{p.name}</p>
                        <p>₹ {p.price}</p>
                      </div>
                      {/* <div>
                        <button onClick={() => handleChange(p, 1)}>
                          +
                        </button>
                        <button>{p}</button>
                        <button onClick={() => handleChange(p, -1)}>
                          -
                        </button>
                      </div> */}
                      {/* <div>
                        <span>{equipment.rent_per_month}</span>
                        <button onClick={() => handleRemove(equipment.id)}>
                          Remove
                        </button>
                      </div> */}
                      <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                   
                  </>
                );
              })}
              <div className="card"></div>
            </div>
            <div className="col-md-6 CartContainerRight">
              <div className="card">
                <p>Item Total:{totalPrice()}</p>
                <p>To Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
