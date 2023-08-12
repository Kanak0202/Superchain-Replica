import React from "react";

import SuperchainNetwork from "../../Images/SuperchainNetwork.jpg";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const SuperImage = styled('img')({
    width:"100%",
})

const SuperSection = styled(Box)`
    margin: 0 40px;
`;

const SuperchainNetworkSection = ()=>{
    return(
        <SuperSection>
            <SuperImage data-aos="fade-up" src={SuperchainNetwork} alt="Superchain Network" />
        </SuperSection>
    );
}

export default SuperchainNetworkSection;