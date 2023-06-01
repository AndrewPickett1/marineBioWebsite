import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import TextEntry from "../components/TextEntry";
import { Box } from "@chakra-ui/react";

const Publications = () => {
    const textEntries = useRef(null);

    document.title = "Publications";

    const onEnter = ({currentTarget})=> {
        gsap.to(currentTarget, {scale: 1.01})
    }
    const onExit = ({currentTarget})=>{
        gsap.to(currentTarget, {scale: 1.00})
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //animations go here
            //gsap.from(textEntries.current, { x: -20, autoAlpha: 0, duration: 1 });
            gsap.from(".box", { x: -20, autoAlpha: 0, duration: 1, stagger: 0.3 });
        }, textEntries);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Box ref={textEntries}>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onExit}><TextEntry/></Box>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onExit}><TextEntry/></Box>
                <Box className="box" onMouseEnter={onEnter} onMouseLeave={onExit}><TextEntry/></Box>
            </Box>
        </>
    );
};

export default Publications;
