import { Box, Card, Divider, Heading, HStack, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const TextEntry = () => {
    return (
        <Box padding={3}>
            <Card shadow="dark-lg" borderRadius={30}>
                <HStack margin={5}>
                    <ArrowRightIcon marginEnd={7}></ArrowRightIcon>
                    <Heading paddingEnd={7} wrap="false">
                        {" "}
                        Title
                    </Heading>
                    {/* wont show */}
                    <Divider height={150} borderRadius={30} borderWidth="1px" orientation="vertical" />
                    <Text paddingStart={7}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </HStack>
            </Card>
        </Box>
    );
};

export default TextEntry;
