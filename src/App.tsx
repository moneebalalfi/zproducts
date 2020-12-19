import { Alert, Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import Product from "./components/Product";
import Spinner from "./components/Spinner";

const App = () => {
  const { data, error } = useSWR(
    "https://demo2817897.mockable.io/photoSetData",
    (url: string) => axios(url).then((r) => r.data)
  );

  if (error) return <Alert>No Data</Alert>;

  return (
    <Flex direction="column">
      {!data?.products ? (
        <Spinner />
      ) : (
        <>
          {data?.products.map((product: TProduct) => {
            if (product.isOutOfStock && product.variants.length <= 0)
              return null;

            let slotProducts = product.alternatives
              ? [product, ...product.alternatives]
              : [product];

            return (
              <Flex flex="1">
                {slotProducts.map((slot) => (
                  <Product key={slot.id} prod={slot} />
                ))}
              </Flex>
            );
          })}
        </>
      )}
    </Flex>
  );
};

export default App;
