import { Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { FC } from "react";

interface ProductDetailsProps {
  product: TProduct;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .price {
      color: #e41d1d;
      font-weight: bold;

      &__original-price {
        text-decoration: line-through;
        color: #3c3e40;
        font-size: 0.8rem;
      }
    }
    .name {
      color: #5f5959;
    }
    .subname {
      font-weight: 500;
      color: #3c3e40;
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;
    }
    .brand {
      text-transform: uppercase;
      margin-top: 0.7rem;
      color: #5f5959;
    }
  `;

  let variant = product.variants[0];

  return (
    <Product>
      <Heading fontSize="md" my={2} className="price">
        &#128; {variant.price.discountPrice}{" "}
        <Text as="span" className="price__original-price">
          &#128; {variant.price.retailPrice}
        </Text>
      </Heading>
      <Heading fontSize="sm" className="subname">
        {product.name.split(" ")[0]}
      </Heading>
      <Text fontSize="sm" className="name">
        {product.name}
      </Text>
      <Text fontSize="sm" className="brand">
        {product.brand}
      </Text>
    </Product>
  );
};

export default ProductDetails;
