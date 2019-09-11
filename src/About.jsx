import React from "react";
import S from "styled-components";
import InformationCard from "./InformationCard";
import AdditionalInformation from "./AdditionalInformation";

const About = () => {
    const cardInformationOne = "Driven by this fact, we set for ourselves, a goal to ensure every single Shea Nut is processed in to Shea Butter for the benefit of mankind.";
    const cardInformationTwo = `we operate a craft Shea Butter processing facility located in the heart of the Nigerian Shea belt, manufacturing premium Organic Unrefined Shea Butter with no additives, preservatives, or colorants for enterprises.`;
    const cardInformationThree = `SUSTINEO MAGNUS’ Unrefined Shea Butter is ethically sourced in Nigeria originating from thousands of rural women, all of whom use sustainable and responsible harvesting practices.`;
    return(
        <S_Section id="About">
        <S_H2_Title>Our Passion</S_H2_Title>
        <S_P>We are a team of Shea enthusiasts, thrilled by the amazing natural benefits of Shea to mankind.</S_P>
        <S_Div>
            <InformationCard title={"Driven"} textContent={cardInformationOne}/>
            <InformationCard title={"Organic"} textContent={cardInformationTwo}/>
            <InformationCard title={"Traditional"} textContent={cardInformationThree}/>
            <AdditionalInformation />
        </S_Div>
        </S_Section>
    );
}
export default About;

const S_Section = S.section`
    padding: 20px;
`;
const S_H2_Title = S.h2`
    width: 100%;
    font-size: 7rem;
    color: #000;
    text-align: center;
    margin-top: 75px;
    font-weight: 400;
`;
const S_P = S.p`
    width: 100%;
    font-size: 2.4rem;
    margin-bottom: 75px;
    text-align: center;
`;
const S_Div = S.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;
