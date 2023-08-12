import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const Container = styled(Box)`
height:250px;
        background-color: #fff;
    background-image: url(https://uploads-ssl.webflow.com/63d065613c2f112ae6bf6365/63e419c29cf814057e20a1c1_drew-beamer-kUHfMW8awpE-unsplash.jpg);
    background-position: 50%;
    background-size: cover;
    padding: 60px 5% 30px;
    font-family: Polysans-Slim, sans-serif; 
`;

const Footer = ()=>{
    return(
        <Container>

        </Container>
    );
}

export default Footer;