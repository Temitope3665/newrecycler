import { Box, Image, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/Navbar/navbar";
import Success from "../images/success.png";

const SuccessfulTemp = () => {
    return (
        <Box>
            <NavBar />

            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" w="30%" m="0 auto" p="20px" borderRadius="8px" mt="20px">
                <Image w="200px" m="40px auto" src={Success} alt="success" />
                <Box textAlign="center">
                    <Text>Thank you for choosing us 🤗 ! <br/> Check your email to download your receipt</Text>
                    <Text color="brand.gray" mt="10px" mb="20px">We will be at your residential address within 24 hours</Text>

                    <CustomButton
            bg="brand.primary"
            hoverBg="brand.white"
            hoverColor="brand.primary"
            color="brand.white"
            border="1px solid #5B44ED"
            href="/"
          >
            Go Home
          </CustomButton>

                </Box>
            </Box>
        </Box>
    )
};

export default SuccessfulTemp;