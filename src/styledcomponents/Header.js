import styled from "styled-components"
import theme from "../json/theme.json"

export const HeaderContainer = styled.header`
padding: 25px;
text-align: center;
background-color: ${theme.color3};
color: ${theme.color2};
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const NavLinkWrapper = styled.a`
text-decoration: none;
color: ${theme.color1}
&:hover {
    color: ${theme.color4};
    font-weight: 800;
}
`
