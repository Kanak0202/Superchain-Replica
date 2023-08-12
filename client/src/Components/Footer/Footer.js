import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

//image
import ChainLink from "../../Images/ChainLink.png";

//icons
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled(Box)`
height:250px;
        background-color: #fff;
    background-image: url(https://uploads-ssl.webflow.com/63d065613c2f112ae6bf6365/63e419c29cf814057e20a1c1_drew-beamer-kUHfMW8awpE-unsplash.jpg);
    background-position: 50%;
    background-size: cover;
    padding: 60px 200px;
    font-family: Polysans-Slim, sans-serif; 
    display:flex;
    flex-direction:row;
`;

const LinkContainer = styled(Box)`
    display:flex;
    flex-direction:column;
    margin: 0 50px;
    text-align:left;
    width:300px;
`;
const LogoContainer = styled(Box)`
    display:flex;
    flex-direction:column;
    margin-right:250px;
    text-align:left
`;

const ChainlinkImage = styled("img")({
    height:"70px",
    width:"250px",
});

const IconContainer = styled(Box)`
    display:flex;
    margin-top:20px;
    flex-direction:row;
`;

const Heading = styled(Typography)`
    color: #3a0723;
    font-family: Polysans-Slim, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
`;

const Links = styled(Typography)`
    font-family: Polysans-Slim, sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    margin-top:20px;
    white-space: nowrap;
`;

const Footer = ()=>{
    return(
        <Container>
            <LogoContainer>
                <ChainlinkImage src={ChainLink} alt="ChainLink" />
                <IconContainer>
                <TwitterIcon className="icon"/>
                <GitHubIcon className="icon"/>
                <LinkedInIcon className="icon"/>
                </IconContainer>
            </LogoContainer>
            <LinkContainer>
                <Heading>ABOUT</Heading>
                <Links className="link">Meet the team</Links>
                <Links className="link">Backers</Links>
                <Links className="link">Terms</Links>
            </LinkContainer>
            <LinkContainer>
            <Heading>BUILD</Heading>
            <Links className="link">Pricing Data</Links>
            <Links className="link">Token</Links>
            </LinkContainer>
            <LinkContainer>
                <Heading>COMMUNITY</Heading>
                <Links className="link">Blog</Links>
                <Links className="link">Twitter</Links>
                <Links className="link">LinkedIn</Links>
                <Links className="link">Github</Links>
            </LinkContainer>
        </Container>
    );
}

export default Footer;