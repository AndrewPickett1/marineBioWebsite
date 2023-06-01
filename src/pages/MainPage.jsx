import {Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import chloePic from "../assets/ChloePic.jpg";
import TextBox from "../components/TextBox";

const MainPage = () => {
    const imgRef = useRef(null);
    const root = useRef(null)

    document.title = "Home";

    // animations
    useLayoutEffect(() => {
        console.log(imgRef);

        //creates gsap context
        let ctx = gsap.context(() => {
            // actual animations
            gsap.from(".text-box", {autoAlpha: 0, x: 10, duration: 2, stagger: 0.3})
            gsap.from(imgRef.current, { autoAlpha: 0, y: 10, duration: 2 });
        }, root);

        // clean up function
        return () => ctx.revert();
    }, []);

    return (
        
            <Box ref={root}>
                <Grid templateColumns="repeat(5, 1fr)">
                    {/* text */}
                    <GridItem colSpan="3">
                            <Box className="text-box">
                                <TextBox />
                            </Box>
                            <Box className="text-box">
                                <TextBox />
                            </Box>
                            <Box className="text-box">
                                <TextBox />
                            </Box>
                    </GridItem>
                    {/* pic */}
                    <GridItem colSpan="2">
                        <Image src={chloePic} borderRadius={12} ref={imgRef} />
                    </GridItem>
                </Grid>
            </Box>
        
    );
};

export default MainPage;
