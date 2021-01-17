import { Alert, Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import EmblaCarousel from "./components/EmblaCaro";
import Spinner from "./components/Spinner";

const App = () => {
  const { data, error } = useSWR(
    "https://demo2817897.mockable.io/photoSetData",
    (url: string) => axios(url).then((r) => r.data)
  );

  if (error) return <Alert>Sorry, there are no products</Alert>;

  return (
    <Box>
      {!data?.products ? (
        <Spinner />
      ) : (
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          {data?.products.map((product: TProduct) => {
            if (product.isOutOfStock && product.variants.length <= 0)
              return null;

            let slotProducts = product.alternatives
              ? [product, ...product.alternatives]
              : [product];

            return <EmblaCarousel key={product.id} products={slotProducts} />;
          })}
        </Flex>
      )}
    </Box>
  );
};

export default App;
