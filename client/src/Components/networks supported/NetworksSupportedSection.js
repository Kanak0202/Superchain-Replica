import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

//image
import LandingSectionImage from "../../Images/LandingSectionImage.jpg";
import eth from "../../Images/eth.png";

const Section = styled(Box)`
height:70vh;
`;

const LandingImage = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${LandingSectionImage})`,// Set the background image using the url() function
    width: "100%",
    height:"70vh",
    flex: 1, // Make ColorImage occupy the remaining space
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
    flexDirection:"column"
  }));

const Heading = styled(Typography)`
        color: #fff;
    font-size: 80px;
    font-weight: 400;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const SubHeading = styled(Typography)`
    font-family: Polysans-Slim, sans-serif;
    color: #eaecf0;
    border-bottom: 0 #6e6e6e;
    padding-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top:50px;
`;

const TextBox = styled(Box)`
    margin-top:0px;
    width:62%;
`;

const EthImage = styled('img')({
    width: "50px",
    height: "auto",
    marginTop:"30px",
})


const NetworksSupportedSection = ()=>{
    return(
        <Section>
            <LandingImage className="backGroundImg">
            <TextBox>
            <Heading>Networks Supported</Heading>
            <SubHeading>ChainLink Central  currently supports common <span style={{color:"#62688f"}}>Ethereum</span> (EVM) based chains and L2s</SubHeading>
            </TextBox>
            <EthImage src={eth} alt="eth" />
            </LandingImage>
            
        </Section>
    );
}

export default NetworksSupportedSection;