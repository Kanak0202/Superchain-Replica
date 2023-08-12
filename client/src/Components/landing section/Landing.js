import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

//image
import LandingSectionImage from "../../Images/LandingSectionImage.jpg";
// import SuperchainImage from "../../Images/SuperchainNetwork.jpg";

const Section = styled(Box)`
height:100vh;
`;

const LandingImage = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${LandingSectionImage})`,// Set the background image using the url() function
    width: "100%",
    height:"100vh",
    flex: 1, // Make ColorImage occupy the remaining space
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  }));

const Heading = styled(Typography)`
    color: #e9d2c4;
    text-transform: none;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Polysans-Slim, sans-serif;
    font-size: 4rem;
    line-height: 80px;
`;

const SubHeading = styled(Typography)`
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 34px;
    text-align:center;
    font-family: Polysans-Slim, sans-serif;
    color: #fff;
    font-size: 1.5rem;
`;

const TextBox = styled(Box)`
    margin-top:0px;
    width:62%;
`;


const LandingSection = ()=>{
    return(
        <Section>
            <LandingImage className="backGroundImg">
            <TextBox>
            <Heading>The Open Index Protocol</Heading>
            <SubHeading>By collecting and customising data in minutes, ChainLink Central serves as the layer on top of which builders create applications, faster</SubHeading>
            <button type="" className="getAccessButton">GET ACCESS</button>
            </TextBox>
            </LandingImage>
            
        </Section>
    );
}

export default LandingSection;