import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Home from '../Home';

const Nav = styled.div`
width : 100%;
height : 65px;
padding : 0 20px;
display: flex;
justify-content: space-around;
background: #131313;
border-bottom: none;
`;
const Navbar = () => {
    return (
        <div>
            <Nav>
            <Burger/>
            </Nav>
            <Home/>
        </div>
    )
}

export default Navbar
