import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

//images
import Nick from "../../Images/nick.jpeg"
import BlockCap from "../../Images/blockCap.svg";
import Kinjal from "../../Images/kinjal.jpeg";
import John from "../../Images/johnlilic.png";
import JohnL from "../../Images/johnl.jpg";

const Container = styled(Box)`
    background:#fff;
    padding-bottom:100px;
`;

const ContainerTop = styled(Box)`
    width:70%;
    margin:auto;
    padding:100px 0;
    border-bottom: 1px solid #eaecf0;
`;

const PersonImage = styled('img')({
    borderRadius:"100%",
    height:"4rem",
    width:"4rem",
    marginTop:"20px"
})

const BigContent = styled(Typography)`
        color: #0e1015;
    font-family: Polysans-Slim, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
`;

const BoxContent = styled(Box)`
    border-left: 5px solid #e2e2e2;
    padding: 15px 30px;
    line-height: 34px;
    text-align:left;
    color: #838383;
    display: block;
    margin:auto;
    margin-top:20px;
    margin-bottom:20px;
    width:50%;
`;

const Name = styled(Typography)`
    color: #101828;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Polysans-Slim, sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5;
`;

const Title = styled(Typography)`
    color: #d0d5dd;
    letter-spacing: normal;
    font-family: Polysans-Slim, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
`;

const ContainerBottom = styled(Box)`
    width:70%;
    margin:auto;
    padding:100px 0;
    border-bottom: 1px solid #eaecf0;
`;

const CompanyLogo = styled('img')({
    marginBottom:"20px",
})

const Point = styled(Typography)`
    font-size:20px;
`;

const Reviews = ()=>{
   return(
    <Container>
        <ContainerTop data-aos="fade-up">
    <BigContent>The protocol is purpose-built and enables four key features:</BigContent>
    <BoxContent>
        <Point>1. The ability for users to become network operators</Point>
<Point>2. Access to historical and real-time low-latency data</Point>
<Point>3. Advanced analytics to improve utilization</Point>
<Point>4. Customizable toolboxes for application-specific use</Point>
    </BoxContent>
    <BigContent className="quote">
    "Instead of packaging all of these components into a Web2 API
service, Superchain has built a Web3 business model for Web3
data. It is a crypto-native solution for on-chain analytics."
    </BigContent>
    <PersonImage src={Nick} alt="Nick Gardner" />
    <Name>Nick Gardner</Name>
    <Title>Whisper</Title>
</ContainerTop>
<ContainerBottom data-aos="fade-up">
    <CompanyLogo src={BlockCap} alt="Blockchain Capital" />
    <BigContent>"ChainLink Central’s technology and focus on toolboxes positions it as the premier Open Index Protocol. Both James and Max have a steadfast vision of how an open, fast, and decentralized index protocol will win - which we are deeply aligned with."</BigContent>
    <PersonImage src={Kinjal} alt="Kinjal" />
    <Name>Kinjal Shah</Name>
    <Title>General Partner at Blockchain Capital.</Title>
</ContainerBottom>
<ContainerBottom data-aos="fade-up">
    <CompanyLogo src={John} alt="Blockchain Capital" />
    <BigContent>"ChainLink Central is the most based chain of them all"</BigContent>
    <PersonImage src={JohnL} alt="Kinjal" />
    <Name>John Lilic</Name>
    <Title>Product development advisor and seed investor</Title>
</ContainerBottom>
    </Container>
   );
}

export default Reviews;