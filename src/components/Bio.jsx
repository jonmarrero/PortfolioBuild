import about from "../json/about.json";
import { BioContainer, BioImage } from "../styledcomponents/Bio";

export default function Bio(props){
    return ( 
        <BioContainer>
            <h2>{about.name}</h2>
            <BioImage src={about.image}/>
            <h3>{about.email}</h3>
            <h1>{about.bio}</h1>
            <h4>{about.contact}</h4>
        </BioContainer>
    );
}