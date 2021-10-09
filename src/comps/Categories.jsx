import React, { useContext } from "react";
import SingleCategory from "./SingleCategory";
import styled from "styled-components";
import { CategoryContext } from "../Context";

const Categories = () => {
  const { data } = useContext(CategoryContext);

  return (
    <Wrapper>
      {data.length === 0 && <p>Loading....</p>}
      {data.map((category, index) => (
        <SingleCategory key={index} category={category} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export default Categories;
