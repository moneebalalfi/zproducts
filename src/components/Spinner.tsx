import React from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";
import Layout from "./Layout";

const Spinner = () => (
  <Layout>
    <ChakraSpinner
      mt={16}
      thickness="4px"
      speed="0.65s"
      emptyColor="blue.200"
      color="red.500"
      size="xl"
    />
  </Layout>
);

export default Spinner;
