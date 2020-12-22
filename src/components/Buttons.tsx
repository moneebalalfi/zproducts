import React, { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface ButtonsProps {
  enabled: boolean;
  onClick: () => void;
}

export const PrevBtn: FC<ButtonsProps> = ({ enabled, onClick }) => (
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
    disabled={!enabled}
    _hover={{ bgColor: "none" }}
    _focus={{ border: "none" }}
    icon={<IoIosArrowBack size={20} fontWeight="bold" />}
  />
);

export const NextBtn: FC<ButtonsProps> = ({ enabled, onClick }) => (
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
    onClick={onClick}
    disabled={!enabled}
  />
);
