import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import TextEntry from "../components/TextEntry";

const Research = () => {
    const textEntries = useRef(null);

    document.title = "Research";

    //on hover animation
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.01 });
    }
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.0 });
    }
    

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //animations go here
            gsap.from(".box", { x: -20, autoAlpha: 0, duration: 1, stagger: 0.3 });
            
            
        }, textEntries);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Box ref={textEntries}>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}><TextEntry/></Box>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}><TextEntry/></Box>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}><TextEntry/></Box>
            </Box>
        </>
    );
};

export default Research;
