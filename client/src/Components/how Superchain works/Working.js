import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)`
    display:flex;
    flex-direction:row;
    ${'' /* height:500px; */}
    margin:0 100px;
    color:#e9d2c4;
    padding:100px 0;
`;
const RightCol  = styled(Box)`
    display:flex;
    flex-direction:column;
    width:50%;
`;
const LeftCol  = styled(Box)`
    display:flex;
    flex-direction:column;
    text-align:left;
    width:50%;
`;

const LeftHeading = styled(Typography)`
      color: #e9d2c4;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Polysans-Slim, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.3;
`;

const Line = styled(Typography)`
  color:#ff2c3c;
  margin-bottom:20px;
`;



const Working = ()=>{
    return(
        <Container data-aos="fade-up">
            <LeftCol>
              <Line>__</Line>
              <LeftHeading>How ChainLink Central works</LeftHeading>
            </LeftCol>
            <RightCol>
            <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-content">
      <h2>Shift in mindset</h2>
                    <p>ChainLink Central's solution offers a shift in mindset from "Web2" centralised architectures to "Web3" decentralised architecture. Data indexes from ChainLink Central  are pushed out to users benefitting from low latency performance by processing locally.</p></div>
    </div>
    <div class="timeline-item">
      <div class="timeline-content">
      <h2>Consistent and granular model</h2>
                    <p>ChainLink Central  unifies data into a consistent and granular model, rather than simply aggregating it due to the limitations of centralised architecture. This allows data to be fast, customisable and decentralised</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-content">
      <h2>Storage and Streaming</h2>
                    <p>ChainLink Central  has its own customised data storage platform and streaming capabilities. Developers interact with the indices via an SDK for on-the-wire speeds that avoid the use of slow presentation layers.</p></div>
    </div>
    <div class="timeline-item">
      <div class="timeline-content">
      <h2>Designed around users</h2>
                    <p>ChainLink Central's aim is to realise a fully decentralized data protocol designed around users, rather than computer limitations.</p></div>
    </div>
  </div>
            </RightCol>
        </Container>
    );
}

export default Working;