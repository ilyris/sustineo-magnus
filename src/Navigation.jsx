import React, {useState} from "react";
import styled from 'styled-components';
import './App.css';

const Navigation = () => {
  return(
    <Styled_Nav>
        <Styled_UL>
            <Styled_Li>
                <Styled_Anchors href="#"> Home</Styled_Anchors>
            </Styled_Li>
            <Styled_Li>
                <Styled_Anchors href="#"> About</Styled_Anchors>
            </Styled_Li>
            <Styled_Li>
                <Styled_h1> Unrefined Shea Butter for Enterprises</Styled_h1>
            </Styled_Li>
            <Styled_Li>
                <Styled_Anchors href="#"> Contact</Styled_Anchors>
            </Styled_Li>
            <Styled_Li>
                <Styled_Anchors href="#"> FAQs</Styled_Anchors>
            </Styled_Li>
        </Styled_UL>
    </Styled_Nav>
 );
}

export default Navigation;

const Styled_Nav = styled.nav`
    background-color: #fff;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
`;
const Styled_UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;
const Styled_Li = styled.li`
    padding: 0 20px;
`;

const Styled_Anchors = styled.a`
    font-size: 2.2rem;
    color: #000;
`;
const Styled_h1 = styled.h1`
    font-size: 4rem;
    font-family: 'Lobster', cursive;
`;
