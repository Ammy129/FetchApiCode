import React from "react";
import styled from "styled-components";

const SingleCategory = ({ category }) => {
  return <Button>{category}</Button>;
};

const Button = styled.button`
  all: unset;
  font-size: 0.8rem;
  background: orange;
  color: white;
  padding: 0.5rem 3rem;
  border-radius: 4px;
  cursor: pointer;
`;

export default SingleCategory;
