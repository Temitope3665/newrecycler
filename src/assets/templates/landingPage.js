import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/Navbar/navbar";
import BackgroundImg from "../images/new-bg.jpeg";

const LandingPage = () => {
  return (
    <Box>
      <NavBar />
      <Box p="88px 80px" mt="5px" bg="brand.primary" h="100vh" w="100%" backgroundImage={BackgroundImg} backgroundSize="cover" backgroundPosition="center">
          <Box w="100%" mt="80px">
            <Text fontSize="80px" w="100%" color="white" textAlign="center" fontWeight="extrabold">
              Dispose your <br/>Waste with Us
            </Text>
            <Box textAlign="center" mt="20px">
              <CustomButton
                bg="brand.white"
                hoverBg="brand.primary"
                hoverColor="brand.white"
                color="brand.primary"
                border="1px solid #FFFFFF"
                href="/waste-pick-up"
              >
                Get Started !
              </CustomButton>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
