import about from "../json/about.json"
import { HeaderContainer, NavContainer, NavLinkWrapper } from "../styledcomponents/Header";


export default function header (props){
    return (
        <HeaderContainer>
            <h1>Jonathan Marrero</h1>
            <h2>Software Engineer</h2>
            <NavContainer>
                <NavLinkWrapper href="https://www.linkedin.com/in/jonathanmarrero/">
                    <div>LinkedIn</div>
                </NavLinkWrapper> 
                <NavLinkWrapper href="https://docs.google.com/document/d/1M4FqtNpkLhHZ7V6mp0SAyVtmGW1p7IjQoiVOXbtEoS8/edit">
                    <div>Resume</div>
                </NavLinkWrapper> 
                <NavLinkWrapper href="https://github.com/jonmarrero">
                    <div>Github</div>
                </NavLinkWrapper> 
                <NavLinkWrapper href="https://replit.com/@Jonmarrero">
                    <div>Replit</div>
                </NavLinkWrapper>  
            </NavContainer>
        </HeaderContainer>
    );
}