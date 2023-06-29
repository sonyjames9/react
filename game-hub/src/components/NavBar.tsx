import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorMoreSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar