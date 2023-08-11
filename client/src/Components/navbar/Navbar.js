import { AppBar, Toolbar, Typography, styled,Box } from "@mui/material";

//logo
import ChainLink from "../../Images/ChainLink.png";

const Component = styled(AppBar)`
    background: black;
    color: white;
    display:flex;
    flex-direction:row;
    align-items:center;
    height:100px;
    box-sizing:border-box;
    font-family:Polysans-Slim, sans-serif;
    padding: 0 50px;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    margin:auto;
    background:black;
        color:#e9d2c4;
        font-size:17px;
        opacity:.8;
    & > a{
        padding:20px;
        color: inherit;
        text-decoration:none;
    }, 
    
`;

const Access = styled(Typography)`
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
`;

const Links = styled(Typography)`
    padding:0 20px;
`;

const AccessComponent = styled(Box)`
    align-items:center;
    justify-content:center;
    padding: 12px 25px;
    background:#1A1B1F;
`;

const LogoImage = styled("img")({
    height:"70px",
});



const Navbar = ()=>{
    return (
        <div>
            <Component>
            <LogoImage src={ChainLink} alt="ChainLink Central"/>
                <Container>
                    <Links>MEET THE TEAM</Links>
                    <Links>BACKERS</Links>
                    <Links>BLOG</Links>
                </Container>
                <AccessComponent>
                <Access>GET ACCESS</Access>
                </AccessComponent>
            </Component>
        </div>
    )
}

export default Navbar;