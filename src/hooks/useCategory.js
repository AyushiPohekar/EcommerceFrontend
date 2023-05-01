import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../global";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  console.log(categories)
  //get category

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/category/getallcategory`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
