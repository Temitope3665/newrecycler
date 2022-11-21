import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import brandLogo from "../../assets/icons/brand-logo.svg";
import { close, hamburger } from "../../assets/svgs/svg";
import CustomButton from "../CustomButton/customButton";
import SmallNavbar from "./smallNavbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Flex
      bg="brand.green"
      p={{ base: "10px 50px", lg: "15px 80px"}}
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      w="100%"
      display={{ base: "block", lg: "flex" }}
    >
      <Flex alignItems="center" color="brand.dark" justifyContent={{ base: "space-between" }}>
        <a href="/">
          <Image cursor="pointer" src={brandLogo} w={{ base: "140px", lg:"150px"}} alt="brand-logo" />
        </a>
        <Box display={{ base: "block", lg: "none" }} onClick={() => setOpen(!open)}>{open ? close : hamburger}</Box>
        <Flex alignItems="center" ml={{ base: "0", lg: "120px"}} display={{ base: "none", lg: "flex" }}>
          <Text
            mr="50px"
            style={{ transition: "all 0.8s ease" }}
            cursor="pointer"
            _hover={{ color: "brand.primary" }}
            mt={{ base: "20px", lg: "0" }}
          >
            How it Works
          </Text>
          <Text
            style={{ transition: "all 0.8s ease" }}
            cursor="pointer"
            _hover={{ color: "brand.primary" }}
            mt={{ base: "20px", lg: "0" }}
          >
            About NewRecycler
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={{ base: "", lg: "space-evenly"}} alignItems="center" mt={{ base: "20px", lg: "0" }} display={{ base: "none", lg: "block" }}>
          <CustomButton
            bg="brand.primary"
            hoverBg="brand.white"
            hoverColor="brand.primary"
            color="brand.white"
            border="1px solid #5B44ED"
            href="/waste-pick-up"
          >
            Waste Pickup
          </CustomButton>
      </Flex>

      {open &&
        <SmallNavbar />
      }
    </Flex>
  );
};

export default NavBar;
