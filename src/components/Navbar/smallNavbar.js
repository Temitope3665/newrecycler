import { Flex, Text } from "@chakra-ui/react";
import CustomButton from "../CustomButton/customButton";

const SmallNavbar = () => {
  
  return (
    <Flex
      bg="brand.green"
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
      w="100%"
      display={{ base: "block", lg: "flex" }}
      mt="10px"
    >
      <Flex alignItems="center" color="brand.dark" justifyContent={{ base: "space-between" }}>
        <Flex alignItems="center" ml={{ base: "0", lg: "120px"}} display={{ base: "block", lg: "flex" }}>
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
      <Flex justifyContent={{ base: "", lg: "space-evenly"}} alignItems="center" mt={{ base: "20px", lg: "0" }}>
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

export default SmallNavbar;
