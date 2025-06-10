import { useState, useEffect, use } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      //   console.log("Categories fetched:", data.categories);
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return categories;
}
