import React from "react";

import aboutData from "../../constants/aboutWeb3";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
    background-image: linear-gradient(to bottom left, #DADCDD, #F3F5F7);  
    padding:120px 100px;
`;

const Heading = styled(Typography)`
        width: 100%;
    color: #0e1015;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Polysans-Slim, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
`;

const Content = styled(Typography)`
    color: #838383;
    margin-top: 20px;
    font-family: Polysans-Slim, sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    max-width:70%;
`;

const LeftContent = styled(Box)`
    text-align:left;
    margin-bottom: 7rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;
const RightContent = styled(Box)`
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end; // Add this line to align content to the bottom right
    margin-bottom: 7rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const AboutWeb3 = ()=>{
    return (
        <Container>
            {aboutData.map((data, index)=>{
                if(index%2==0){
                    return (
                        <LeftContent>
                            <Heading>{data.title}</Heading>
                            <Content>{data.content}</Content>
                        </LeftContent>
                    );
                }
                else{
                    return (
                        <RightContent>
                            <Heading>{data.title}</Heading>
                            <Content>{data.content}</Content>
                            {index===aboutData.length-1 ? <button className="getAccessButton AboutBtn">GET ACCESS</button> : <></>}
                        </RightContent>
                    );
                }
            })}
            
        </Container>
    );
}

export default AboutWeb3;