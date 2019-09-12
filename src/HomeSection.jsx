import React, {useState} from "react";
import styled from 'styled-components';
import './App.css';


const HomeSection = () => {
  return(
        <Styled_Section id="homeSection">
            <Styled_Overlay_Div></Styled_Overlay_Div>
            <Styled_Content_Container_Div>
                <Styled_HomeSection_Content_P>
                    <Styled_H2 className="one">SUSTINEO MAGNUS</Styled_H2>
                    <Styled_H2 className="two">delivers Premium Shea Butter</Styled_H2>
                    <Styled_H2 className="three">worldwide</Styled_H2>
                </Styled_HomeSection_Content_P>
            </Styled_Content_Container_Div>
            <Styled_Second_Content_Container_Div>
                <Styled_HomeSection_Content_P_Two>
                    Through a scalable tech-enabled process, we source premium Shea Nuts, process same into premium Shea Butter and deliver it to enterprises of all sizes worldwide. 
                </Styled_HomeSection_Content_P_Two>
            </Styled_Second_Content_Container_Div>
            <div className="scroll-button-container">
            <a className="scroll-button" href="#About"><span></span></a>
            </div>
            
        </Styled_Section>
 );
}

export default HomeSection;

const Styled_Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 80vh;
    width: 100%;
    margin: 100px auto 0 auto;
`;
const Styled_Overlay_Div = styled.div`
    position: absolute;
    width: 100%;
    height: 80vh;
    background-color: rgba(0,0,0,0.6);
`;
const Styled_Content_Container_Div = styled.div`
    z-index: 10;
    width: 80%;
    margin: 200px auto 100px auto;
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
    display: flex;
    align-items: center;
`;
const Styled_HomeSection_Content_P_Two = styled.p`
    font-size: calc(1.8rem + .5vw);
    color: #fff;
    width: 80%;
    margin: 0 auto;
`;