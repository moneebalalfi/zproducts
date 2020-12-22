import { Box, Flex } from "@chakra-ui/react";
import { useEmblaCarousel } from "embla-carousel/react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { NextBtn, PrevBtn } from "./Buttons";
import Product from "./Product";

interface EmblaCarouselProps {
  slides: any[];
}

const EmblaCarousel: FC<EmblaCarouselProps> = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Box
      position="relative"
      width="300px"
      alignItems="center"
      textAlign="center"
    >
      <Box overflow="hidden" w="100%" ref={viewportRef}>
        <Flex>
          {slides.map((index) => (
            <Box position="relative" minW="100%" key={index}>
              <Product prod={index} />
            </Box>
          ))}
        </Flex>
      </Box>
      <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
    </Box>
  );
};

export default EmblaCarousel;
