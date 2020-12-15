import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import NextBtn from "./buttons/NextBtn";
import PrevBtn from "./buttons/PrevBtn";
import Product from "./Product";

interface SliderProps {
  slot: TProduct[];
}

const Slider: FC<SliderProps> = ({ slot }) => {
  const [products, setProducts] = useState(slot);
  const [index, setIndex] = useState(2);

  const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    &.next {
      transform: translateX(100%);
    }

    &.active {
      opacity: 1;
      transform: translateX(0);
    }

    &.last {
      transform: translateX(-100%);
    }
  `;

  useEffect(() => {
    const lastIndex = slot.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slot]);

  return (
    <Flex>
      <Flex
        w="300px"
        minH="500px"
        position="relative"
        alignItems="center"
        overflow="hidden"
      >
        {products?.map((prod: TProduct, productIndex) => {
          let position = "next";

          if (productIndex === index) {
            position = "active";
          }

          if (
            (index === 0 && productIndex === slot.length - 1) ||
            productIndex === index - 1
          ) {
            position = "last";
          }

          return (
            <Slide key={prod.id} className={position}>
              <Product prod={prod} />
            </Slide>
          );
        })}

        <PrevBtn onClick={() => setIndex(index - 1)} />
        <NextBtn onClick={() => setIndex(index + 1)} />
      </Flex>
    </Flex>
  );
};

export default Slider;
