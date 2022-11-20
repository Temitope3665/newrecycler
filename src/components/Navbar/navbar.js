import { Flex, Image, Text } from "@chakra-ui/react";
import brandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const NavBar = () => {
  return (
    <Flex
      bg="brand.green"
      p="15px 80px"
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      w="100%" 
    >
      <Flex alignItems="center" color="brand.dark">
        <a href="/">
          <Image cursor="pointer" src={brandLogo} w="150px" alt="brand-logo" />
        </a>
        <Flex alignItems="center" ml="120px">
          <Text
            mr="50px"
            style={{ transition: "all 0.8s ease" }}
            cursor="pointer"
            _hover={{ color: "brand.yellow" }}
          >
            How it Works
          </Text>
          <Text
            style={{ transition: "all 0.8s ease" }}
            cursor="pointer"
            _hover={{ color: "brand.yellow" }}
          >
            About NewRecycler
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-evenly" alignItems="center">
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
    </Flex>
  );
};

export default NavBar;
