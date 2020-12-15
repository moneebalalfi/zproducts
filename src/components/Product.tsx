import { Box, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import ProductDetails from "./ProductDetails";

interface ProductProps {
  prod: TProduct;
}

const Product: FC<ProductProps> = ({ prod }) => {
  return (
    <Box width="250px" h="250px">
      <Image src={prod?.images[0].url} alt={prod.name} objectFit="cover" />
      <ProductDetails product={prod} />
    </Box>
  );
};

export default Product;
