import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import React, { FC } from "react";

interface NextBtnProps {
  handleClick: () => void;
}

const NextBtn: FC<NextBtnProps> = ({ handleClick }) => (
  <IconButton
    backgroundColor="#fff"
    width="3.4"
    height="6rem"
    opacity=".9"
    padding={4}
    borderRadius="none"
    position="absolute"
    top="150px"
    right="0"
    _hover={{ bgColor: "none" }}
    _focus={{ border: "none" }}
    aria-label="Next"
    icon={<IoIosArrowForward size={20} />}
    onClick={handleClick}
  />
);

export default NextBtn;
