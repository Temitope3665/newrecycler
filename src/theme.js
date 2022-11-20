import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1441px",
});

const colors = {
  brand: {
    primary: "#5B44ED",
    lightBlue: "#CDE1FF",
    white: "#FFFFFF",
    lightBlue2: "#ABCDFF",
    lightBlue3: "#81B3FF",
    lightGrey: "#FAF9F7",
    dark: "#011533",
    lightGreen: "#65D593",
    yellow: "#F7E427",
    secondary: "#C2E189",
    orange: "#FE9D1A",
    gray: '#A2ADBE',
    grey: '#F0F2F5',
  },
};

const fonts = {
  heading: `'', "Josefin Sans", "Roboto"`,
  body: ` "Josefin Sans", "Roboto"`,
};

const styles = {
  body: {
    fontFamily: "'Josefin Sans', 'Roboto'",
  },
  "::placeholder": {
    color: "#BABABA",
  },
};

const theme = extendTheme({ colors, styles, fonts, breakpoints });

export default theme;
