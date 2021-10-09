import { createContext, useState, useEffect } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const resJson = await response.json();
    const data = await ["All", ...resJson];
    setData(data);
    // return await resJson;
  };

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const resJson = await response.json();
    setProducts(resJson);
    // return await resJson;
  };

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  return (
    <CategoryContext.Provider value={{ data, products }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
