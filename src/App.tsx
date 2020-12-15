import { Alert, Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import Slider from "./components/Slider";
import Spinner from "./components/Spinner";

const App = () => {
  const { data, error } = useSWR(
    "https://demo2817897.mockable.io/photoSetData",
    (url: string) => axios(url).then((r) => r.data)
  );

  if (error) return <Alert>No Data</Alert>;

  return (
    <Flex justify="center">
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

            console.log(slotProducts);

            return <Slider key={product.id} slot={slotProducts} />;
          })}
        </>
      )}
    </Flex>
  );
};

export default App;
