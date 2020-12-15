import { IconButton } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import React, { FC } from "react";

interface NextBtnProps {
  onClick: () => void;
}

const NextBtn: FC<NextBtnProps> = ({ onClick }) => (
  <IconButton
    as="button"
    backgroundColor="#fff"
    width="3.4"
    height="6rem"
    opacity=".9"
    padding={4}
    borderRadius="none"
    position="absolute"
    top="150px"
    right="0"
    aria-label="Next"
    onClick={onClick}
    _hover={{ bgColor: "none" }}
    _focus={{ border: "none" }}
    icon={<IoIosArrowForward size={20} />}
  />
);

export default NextBtn;
