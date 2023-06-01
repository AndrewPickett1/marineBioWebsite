import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import chloePic from "../assets/ChloePic2.jpg";
import TextBox from "../components/TextBox";

const AboutMe = () => {
    const imgRef = useRef(null);
    const textBox1Ref = useRef(null);
    const textBox2Ref = useRef(null);

    document.title = "About Me";

    useLayoutEffect(() => {
        console.log(imgRef);

        let ctx = gsap.context(() => {
            //animations
            gsap.from(imgRef.current, { autoAlpha: 0, y: 10, duration: 1 });
            gsap.from(textBox1Ref.current, { autoAlpha: 0, ease: "expo", x: 20, duration: 2, delay: 0.25 });
            gsap.from(textBox2Ref.current, { autoAlpha: 0, ease: "expo", x: 20, duration: 2, delay: 0.5 });
        }, AboutMe);

        return () => ctx.revert();
    }, []);

    return (
        <Grid templateColumns="repeat(5,1fr)">
            {/* image */}
            <GridItem colSpan={2}>
                <Image src={chloePic} borderRadius={12} ref={imgRef}></Image>
            </GridItem>

            {/* text */}
            <GridItem marginLeft={12} colSpan={3}>
                <Box ref={textBox1Ref}>
                    <TextBox />
                </Box>

                <Box ref={textBox2Ref}>
                    <TextBox />
                </Box>


                
            </GridItem>

            
        </Grid>
    );
};

export default AboutMe;
