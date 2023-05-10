import styled from "styled-components"

export const StyledCard = styled.div`

display:flex;
align-items:center;
background-color:#fff;
border-radius:15px;
box-shadow:0 0 30px rgba(0,0,0,0.15);
margin:40px 0;
padding:60px;
flex-direction:${({layout}) => layout || 'row'};
transition:0.4s ease-in-out;

img{
    transition:0.4s linear;
}
h2{
    transition:0.3s ease-in;
    animation: headingAnimation 2s linear alternate 1;
}

&:hover{
    transform:scale(1.05);
}

&:hover img{
    transition-delay:0.1s;
    transform:rotate(-6deg);
}

&:hover h2{
 
    
}


img{
    width:80%; 
    margin :auto;

}

& > div{
    flex:1;
}

@media(max-width:${({theme}) => theme.mobile}){
    flex-direction:column; 


}

`