import "./App.css";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import Research from "./pages/Research";
import { Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
// import forestImg from "./assets/Forest.jpg";

import { useLayoutEffect, useRef } from "react";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

function App() {
    const routesRef = useRef(null);
    const navBarRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //animations
            gsap.from(routesRef.current, { autoAlpha: 0 });
        }, App);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* <Box bgImage={forestImg} bgSize={2000}> */}
            <NavBar ref={navBarRef} />
            <Box margin={10} ref={routesRef}>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/about" element={<AboutMe />}></Route>
                    <Route path="/research" element={<Research />}></Route>
                    <Route path="/publications" element={<Publications />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </Box>
            {/* </Box> */}
        </>
    );
}

export default App;
