import { IconButton } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import React, { FC } from "react";

interface PrevBtnBtnProps {
  onClick: () => void;
}

const PrevBtn: FC<PrevBtnBtnProps> = ({ onClick }) => (
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
    left="0"
    aria-label="Prev"
    onClick={onClick}
    _hover={{ bgColor: "none" }}
    _focus={{ border: "none" }}
    icon={<IoIosArrowBack size={20} fontWeight="bold" />}
  />
);

export default PrevBtn;
