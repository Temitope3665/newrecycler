import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeerbitCheckout from "seerbit-reactjs";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/Navbar/navbar";
import TextInput from "../../components/TextInputs/TextInput";
import { locations } from "../../utils/constants";

const WastePickupTemp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [amount, setAmount] = useState(location);

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const state = {
    public_key: publicKey,
    amount: amount,
    tranref: new Date().getTime(),
    customization: {
      theme: {
        border_color: "#F0F2F5",
        background_color: "#5B44ED",
        button_color: "#FFF",
      },
      payment_method: ["card", "account", "transfer", "wallet", "ussd"],
      display_fee: true, // true
      display_type: "embed", //inline
      logo: "logo_url | base64",
    },
  };

  const close = (close) => {
    console.log(close);
  };
  const callback = (response) => {
    if (response.code === "00") {
      setTimeout(() => {
        navigate("/success");
      }, 2000);
    }
  };

  const checkProgress = (progress) => {
    console.log(progress);
  };

  return (
    <Box>
      <NavBar />

      <Box p="15px 80px">
        <Text fontSize="30px" mt="20px">
          General Information
        </Text>
        <form>
          <Box border="1px solid #F0F2F5" w="100%">
            <SimpleGrid columns={2} gap="20px" borderRadius="8px" p="20px">
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <TextInput
                label="Email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextInput
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <TextInput
                label="Full Residency Address"
                placeholder="Enter your full residency address"
                type="text"
                onChange={(e) => setFullAddress(e.target.value)}
                value={fullAddress}
              />

              <FormControl mt="20px">
                <FormLabel color="brand.dark" fontSize="14px" fontWeight="500">
                  Location
                </FormLabel>
                <Select
                  placeholder="Please select a region"
                  focusBorderColor="#65D593"
                  _focus={{ border: "0.1px solid #65D593" }}
                  _placeholder={{
                    color: "brand.grey",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  icon={<TriangleDownIcon />}
                  size="lg"
                  fontSize="16px"
                  height="48px"
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setAmount(e.target.value);
                  }}
                  value={location}
                >
                  {locations.map((location, index) => (
                    <option value={location.amt} key={index}>
                      {location.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <TextInput
                label="Total Amount"
                placeholder="Total amount"
                isReadOnly
                type="text"
                value={`NGN ${
                  !firstName ||
                  !lastName ||
                  !email ||
                  !phoneNumber ||
                  !location ||
                  !fullAddress
                    ? ""
                    : amount
                }`}
              />
            </SimpleGrid>
            <Box p="20px" mr="auto">
              <CustomButton
                bg="brand.primary"
                hoverBg="brand.white"
                hoverColor="brand.primary"
                color="brand.white"
                border="1px solid #5B44ED"
                href="/waste-pick-up"
                w="100%"
                disabled={
                  !firstName ||
                  !lastName ||
                  !email ||
                  !phoneNumber ||
                  !location ||
                  !fullAddress
                }
                onClick={(e) => e.preventDefault()}
              >
                <SeerbitCheckout
                  className="btn seerbit-btn"
                  type="div"
                  tranref={amount}
                  currency={"NGN"}
                  description={"Dispose bin"}
                  country={"NG"}
                  public_key={state.public_key}
                  callback={callback}
                  close={close}
                  scriptStatus={checkProgress}
                  amount={amount}
                  tag={"button"}
                  full_name={`${firstName} ${lastName}`}
                  email={email}
                  mobile_no={phoneNumber}
                  customization={state.customization}
                  version={"2"} //optional
                  title={"Proceed to checkout"}
                />
              </CustomButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default WastePickupTemp;
