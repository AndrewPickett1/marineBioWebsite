import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
};

const theme = extendTheme({
    config,
    // fonts: {
    //     heading: "Libre Baskerville",
    //     body: "Source Sans Pro",
    // },
});

export default theme;
