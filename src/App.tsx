import { Alert, Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import EmblaCarousel from "./components/EmblaCaro";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";

const App = () => {
  const { data, error } = useSWR(
    "https://demo2817897.mockable.io/photoSetData",
    (url: string) => axios(url).then((r) => r.data)
  );

  if (error) return <Alert>Sorry, there are no products</Alert>;

  return (
    <Layout>
      {!data?.products ? (
        <Spinner />
      ) : (
        <Flex>
          {data?.products.map((product: TProduct) => {
            if (product.isOutOfStock && product.variants.length <= 0)
              return null;

            let slotProducts = product.alternatives
              ? [product, ...product.alternatives]
              : [product];

            return <EmblaCarousel slides={slotProducts} />;
          })}
        </Flex>
      )}
    </Layout>
  );
};

export default App;
