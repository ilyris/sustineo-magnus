import React, {useState} from "react";
import styled from 'styled-components';
import './App.css';


const HomeSection = () => {
  return(
        <Styled_Section id="homeSection">
            <Styled_Overlay_Div></Styled_Overlay_Div>
            <Styled_Content_Container_Div>
                <Styled_HomeSection_Content_P>
                    <Styled_H2>SUSTINEO MAGNUS</Styled_H2>
                    <Styled_H2>delivers Premium Shea Butter</Styled_H2>
                    <Styled_H2>worldwide</Styled_H2>
                </Styled_HomeSection_Content_P>
            </Styled_Content_Container_Div>
            <Styled_Second_Content_Container_Div>
                <Styled_HomeSection_Content_P_Two>
                    Through a scalable tech-enabled process, we source premium Shea Nuts, process same into premium Shea Butter and deliver it to enterprises of all sizes worldwide. 
                </Styled_HomeSection_Content_P_Two>
            </Styled_Second_Content_Container_Div>
            <a className="scroll-button" href="#About"><span></span></a>
        </Styled_Section>
 );
}

export default HomeSection;

const Styled_Section = styled.section`
    display: grid;
    grid-template-rows: repeat(6,1fr);
    grid-template-columns: repeat(10,10%);
    height: 80vh;
    width: 100%;
    margin-top: 80px;
`;
const Styled_Overlay_Div = styled.div`
    position: absolute;
    width: 100%;
    height: 80vh;
    background-color: rgba(0,0,0,0.6);
`;
const Styled_Content_Container_Div = styled.div`
    z-index: 10;
    grid-column: 2/8;
    grid-row: 2/3;
`;
const Styled_HomeSection_Content_P = styled.p`

`;

const Styled_H2 = styled.h2`
    color: #fff;
    font-size: calc(2.6rem + 2vw);
    text-transform: uppercase;
    letter-spacing: 1px;
`;
const Styled_Second_Content_Container_Div = styled.div`
    z-index: 10;
    grid-column: 2/7;
    grid-row: 3/5;
    display: flex;
    align-items: center;
`;
const Styled_HomeSection_Content_P_Two = styled.p`
    font-size: calc(1.8rem + .5vw);
    color: #fff;
`;