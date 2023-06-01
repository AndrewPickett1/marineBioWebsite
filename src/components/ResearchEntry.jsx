import { Heading, HStack, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const ResearchEntry = () => {
    return (
        <HStack paddingBottom={7}>
            <ArrowRightIcon marginEnd={7}></ArrowRightIcon>

            <Heading paddingEnd={7} wrap="false">
                {" "}
                Title
            </Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </Text>
        </HStack>
    );
};

export default ResearchEntry;
