import { StatusBar } from "expo-status-bar";
import React from "react";
import Timer from "./components/Timer";
import { NativeBaseProvider,  extendTheme, Box } from "native-base";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "gray",
      },
      defaultProps: { size: "lg" },
      sizes: {
        xl: { fontSize: "64px" },
        lg: { fontSize: "32px" },
        md: { fontSize: "16px" },
        sm: { fontSize: "12px" },
      },
    },
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        color: "gray",
      },
      defaultProps: {
        color: "gray",
      },
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#FFFFFF" alignItems="center" justifyContent="center">
        <Timer />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}

/* CSS HEX */
// --jet: #363636ff;
// --gunmetal: #242f40ff;
// --satin-sheen-gold: #cca43bff;
// --platinum: #e5e5e5ff;
// --white: #ffffffff;
