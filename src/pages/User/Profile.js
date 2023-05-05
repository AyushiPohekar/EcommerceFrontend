import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../components/Context/auth";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../global";
import { toast } from "react-toastify";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [auth, setAuth] = useAuth();
    console.log('auth',auth)
  const navigate = useNavigate();

  //get user data
  useEffect(() => {
    const { email,  name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);

    setAddress(address);
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address);

    try {
      const { data } = await axios.put(`${API}/api/v1/auth/profile`, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard-Profile"}>
      <div className="container-fluid UserDasboardContainer">
        <div className="row UserDasboardRow ">
          <div className="col-md-3 UserDasboardConlumnLeft">
            <UserMenu />
          </div>
          <div className="col-md-9 UserDasboardConlumnRight">
            <form
              style={{ width: "35%" }}
              onSubmit={handleSubmit}
              className="registerform"
            >
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
               
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
              
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputphone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputphone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
            
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputaddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputaddress"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
             
                />
              </div>
              <button type="submit" className="btn btn-primary Registerbtn">
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
