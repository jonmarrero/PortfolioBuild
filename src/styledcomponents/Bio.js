import styled from "styled-components"
import theme from "../json/theme.json"

export const BioContainer = styled.section`
text-align: center;
padding: 30px;
background-color: ${theme.color2};
color: ${theme.color2}
width: 90%;
margin: auto;
`

export const BioImage = styled.img`
width: 60%;
object-fit: cover;
border-radius: 60px;
max-width: 800px;
`