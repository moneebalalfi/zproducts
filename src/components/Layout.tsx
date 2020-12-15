import { Container } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <Container maxw="xl" centerContent>
      {children}
    </Container>
  );
};

export default Layout;
