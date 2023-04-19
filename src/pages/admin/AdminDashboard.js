import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../components/Context/auth";
import './admin.css';

const AdminDashboard = () => {
  const [auth] = useAuth();
  console.log(auth);
  return (
    <Layout>
      <div className="container-fluid AdminDasboardContainer">
        <div className="row AdminDasboardRow">
          <div className="col-md-3 col-sm-8 AdminDasboardConlumnLeft">
            <AdminMenu />
          </div>
          <div className="col-md-7 col-sm-8 AdminDasboardConlumnRight">
            <div className="card w-75 p-3 ">
              <h3>Admin Name:{auth?.user?.name}</h3>
              <h3>Admin Email:{auth?.user?.email}</h3>
              <h3>Admin Contact: {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
