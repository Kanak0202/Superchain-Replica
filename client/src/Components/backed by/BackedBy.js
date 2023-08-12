import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

//import
import Blockchain from "../../Images/blockCap.svg";
import Maven from "../../Images/maven.png";
import KR from "../../Images/kr.png";
import Tokonomy from "../../Images/toko.png"
import John from "../../Images/johnl.jpg"
import KC from "../../Images/kc.png";

const Container = styled(Box)`
    background:white;
    padding:150px 0;
`;

const Text = styled(Typography)`
        color: #0e1015;
    margin-top: 0;
    font-family: Polysans-Slim, sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;

`;

const ImageContainer = styled(Box)`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

const Image = styled("img")({
    maxHeight:"80px",
    maxWidth:"150px",
    padding:"50px 20px",
})

const BackedBy = ()=>{
    return (
        <Container>
            <Text>Backed by Web3 leaders</Text>
            <ImageContainer>
                <Image src={Blockchain} alt="Blockchain Capital" />
                <Image src={Maven} alt="Maven" />
                <Image src={KR} alt="KR" />
                <Image src={Tokonomy} alt="Tokonomy" />
                <Image src={John} alt="John" />
                <Image src={KC} alt="KC" />
            </ImageContainer>
        </Container>
    );
}

export default BackedBy;