import { Flex, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import ProductDetails from "./ProductDetails";

interface ProductProps {
  prod: TProduct;
}

const Product: FC<ProductProps> = ({ prod }) => {
  return (
    <Flex flexDir="column" width="100%">
      <Image src={prod?.images[0].url} alt={prod.name} objectFit="cover" />
      <ProductDetails product={prod} />
    </Flex>
  );
};

export default Product;
