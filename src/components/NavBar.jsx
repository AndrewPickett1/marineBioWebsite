import { Heading, Flex, Badge, Box, HStack, Text, Card, Link } from "@chakra-ui/react";
import { Link as rrdLink } from "react-router-dom";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import woodImg from "../assets/Wood.jpg";

const NavBar = () => {
    const navBarItems = [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about" },
        { name: "Research", path: "/research" },
        { name: "Publications", path: "/publications" },
        { name: "Contact", path: "/contact" },
    ];

    const logoCardRef = useRef(null);
    const navItemRefs = useRef([]);
    const root = useRef();

    const onEnter = ({currentTarget})=>{
        gsap.to(currentTarget, {scale:1.01})
    }

    const onExit = ({currentTarget})=>{
        gsap.to(currentTarget, {scale:1})
    }

    // google scholar, email, webpage on cofos, orcid

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // logo card
            gsap.from(logoCardRef.current, { x: -10, autoAlpha: 0, duration: 1 });
            gsap.from(navItemRefs.current, { y: -20, autoAlpha: 0, duration: 1, stagger: 0.1, delay: 0.1 });

            
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <Box bgImage={woodImg} bgSize={1000} ref={root}>
            <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
                {/* name/logo card */}
                <Box padding={5} ref={logoCardRef}>
                    <Card bgColor={"white"} padding={2} shadow="2xl">
                        <Heading size="2xl" color="black">
                            {" "}
                            Chloe Kotik{" "}
                        </Heading>
                        <Text marginLeft={2} color="black">
                            <strong>Marine Bio Phd</strong>
                        </Text>
                    </Card>
                </Box>
                {/* nav items */}
                <HStack padding={5}>
                    {navBarItems.map((item, index) => (
                        <Badge
                            ref={(el) => {
                                navItemRefs.current[index] = el;
                            }}
                            fontSize="md"
                            borderRadius={5}
                            key={item.name}
                            boxShadow="2xl"
                            onMouseEnter={onEnter}
                            onMouseLeave={onExit}
                        >
                            <Link as={rrdLink} 
                            to={item.path} 
                            >
                                <strong> {item.name}</strong>
                            </Link>
                        </Badge>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default NavBar;
