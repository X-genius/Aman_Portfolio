import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Planet1 from '../images/planet.svg';
import Planet2 from '../images/planet-2.svg';
import Planet3 from '../images/planet-3.svg';
import Planet4 from '../images/planet-4.svg';
import pdf from '../pdf/resume.pdf';


const Section = styled.section`
height : 100vh;
display : flex;
justify-content : center;
align-items : center;
background : #131313;
`;


const Container = styled.div`
display : grid;
grid-template-columns : 1fr 1fr;
height : 100vh;
padding : 3rem calc(100vh - 1300px);

@media screen and (max-width : 768px)
{
    grid-grid-template-columns : 1fr;
}
`;


const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding : 5rem 2rem;

h1
{
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
}

p
{
    margin: 2rem 0;
    font-size: 3.5rem;
    line-height: 1.1;
}

@media screen and (max-width : 768px)
{
    h1{
        font-size: 1.5rem;
    }

    p{
        font-size: 1.8rem;
    }
}
`;


const Button = styled(motion.button)`
padding: 1rem 3rem;
border : 2px solid #fff;
font-size: 1rem;
border-radius: 4px;
cursor: pointer;
outline: none;
background: transparent;
color: #fff;

@media screen and (max-width : 768px)
{
     font-size : 1rem;
     padding: 1rem 1rem;
}

`;


const Image = styled(motion.img)`
position : absolute;
height : 100%;
width : 100%;
max-width : 250px;
max-height : 250px;

@media screen and (max-width : 768px)
{
    height: 70%;
    width: 70%;
}
`;


const ColumnRight = styled.div`
display : flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
  top: 10px;
  left: 10px;
}

${Image}:nth-child(2){
   top: 170px;
   right: 10px; 
}

${Image}:nth-child(3){
  top: 350px;
  left: 10px;
}

${Image}:nth-child(4){
    bottom: 100px;
    right: 30px;
}

@media screen and (max-width : 768px)
{
${Image}:nth-child(1){
  top: 40px;
  left: 10px;
}

${Image}:nth-child(2){
   top: 150px;
   right: 10px; 
}

${Image}:nth-child(3){
  top: 350px;
  left: 10px;
}

${Image}:nth-child(4){
    bottom: -40px;
    right: 30px;
}
}
`;

const Home = () => {
    const FadeLeft = {
           hidden : {opacity : 0 , x : -100},
           visible : {opacity : 1 , x : 0}
    };
       
    
    return(
            <Section id = "Home">
                <Container>
                    <ColumnLeft>
                    <motion.h1 
                    initial = {{opacity : 0}}  
                    animate = {{opacity : 1}} 
                    transition = {{duration : 1}}>
                        Aman
                    </motion.h1>

                    <motion.p 
                    variants = {FadeLeft} 
                    initial = "hidden" 
                    animate = "visible" 
                    transition = {{duration : 1}}>
                        Full Stack Web 
                        Developer
                    </motion.p>
                    
                    <a href = {pdf} download = "AmanBaghel_Resume">
                    <Button
                     whileHover = {{scale : 1.05}} 
                     whileTap = {{scale : 0.95 , backgroundColor : '#67F6E7' , color : '#000' , border : 'none' }}
                     initial = {{opacity : 0}}  
                     animate = {{opacity : 1 , transition : {duration : 1.5}}}>
                         Resume Download
                    </Button>
                    </a>
                    </ColumnLeft>

                    <ColumnRight>
                    <Image src = {Planet1} alt = "planet1" 
                    whileTap = {{scale : 0.9}}
                    drag = {true}
                    dragConstraints = {{left : 40 , right : 0 , top : 0 , bottom : 50}}
                    initial = {{opacity : 0 , y : -100}}
                    animate = {{opacity : 1 , y : 0 , transition : {duration : 1}}}/>


                    <Image src = {Planet2} alt = "planet2"
                    whileTap = {{scale : 0.6}}
                    drag = {true}
                    dragConstraints = {{left : 0 , right : 0 , top : 0 , bottom : 50}}
                    initial = {{opacity : 0 , x : 100}}
                    animate = {{opacity : 1 , x : 0 , transition : {duration : 1}}} />


                    <Image src = {Planet3} alt = "planet3" 
                    whileTap = {{scale : 0.8}}
                    drag = {true}
                    dragConstraints = {{left : 0 , right : 0 , top : 50 , bottom : 50}}
                    initial = {{opacity : 0 , x : -100}}
                    animate = {{opacity : 1 , x : 0 , transition : {duration : 1}}} />

                    <Image src = {Planet4} alt = "planet4" 
                    whileTap = {{scale : 0.9}}
                    drag = {true}
                    dragConstraints = {{left : 0 , right : 0 , top : 40 , bottom : 0}}
                    initial = {{opacity : 0 , y : 100}}
                    animate = {{opacity : 1 , y : 0 , transition : {duration : 1}}}/>
                    </ColumnRight>
                </Container>
            </Section>
        );
}

export default Home;

