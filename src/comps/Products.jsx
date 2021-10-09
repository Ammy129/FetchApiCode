import React, { useContext } from "react";
import styled from "styled-components";
import { CategoryContext } from "../Context";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products } = useContext(CategoryContext);

  return (
    <Wrapper>
      {products.map(product => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export default Products;
