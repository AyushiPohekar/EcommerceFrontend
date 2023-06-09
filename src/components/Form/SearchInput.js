import React, { useState } from "react";
import { useSearch } from "../Context/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';
import { BiSearch } from "react-icons/bi";
import { API } from "../../global";

const SearchInput = () => {
    const [values,setValues]=useSearch()
    console.log(values)
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const {data}=await axios.get(`${API}/api/v1/product/search/${values.keyword}`);
            setValues({...values,results:data})
            navigate('/search')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="searchformdiv">
      <form className="d-flex" role="search"  onSubmit={handleSubmit}>
 
        <input
          className="form-control me-2"
          type="search"
          placeholder= "Search "
          aria-label="Search"
          value={values.keyword}
          onChange={(e)=>setValues({...values,keyword:e.target.value})}
        />
        {/* <button  type="submit">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchInput;
