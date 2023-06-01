import { Card, Flex, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
    document.title = "Contact";

    return (
        <>
            <Flex justifyContent="center">
                <Card shadow="dark-lg" padding={13}>
                    <Heading> Chloe Kotik </Heading>
                    <Text> Email: email@email.com </Text>
                    <Text> Phone: 123-456-7890 </Text>
                    <Text> Socials: FB ; TW ; LI </Text>
                </Card>
            </Flex>
        </>
    );
};

export default Contact;
