import React from "react";
import S from "styled-components";
import InformationCard from "./InformationCard";
import AdditionalInformation from "./AdditionalInformation";


import { faFire, faTree, faCogs } from '@fortawesome/free-solid-svg-icons';

const About = ({title}) => {
    const cardInformationOne = "Driven by this fact, we set for ourselves, a goal to ensure every single Shea Nut is processed in to Shea Butter for the benefit of mankind.";
    const cardInformationTwo = `we operate a craft Shea Butter processing facility located in the heart of the Nigerian Shea belt, manufacturing premium Organic Unrefined Shea Butter with no additives, preservatives, or colorants for enterprises.`;
    const cardInformationThree = `SUSTINEO MAGNUS’ Unrefined Shea Butter is ethically sourced in Nigeria originating from thousands of rural women, all of whom use sustainable and responsible harvesting practices.`;
    const textContentOne =`Our journey started after realizing the amazing benefits of Shea butter, it significant potential for grassroots wealth creation and the fact that over 65% of the annual production of its raw material (Shea Nuts) rots away in the Nigerian Shea parklands, year in year out.`;
    const textContentTwo =`Our business runs on a scalable technology platform conceived to optimize its Shea nut sourcing capabilities and enable us serve any enterprise that require premium unrefined Shea Butter anywhere in the world within the shortest turnaround time. `;
    return(
        <S_Section id="About">
        <S_H2_Title>{title}</S_H2_Title>
        <S_P>We are a team of Shea enthusiasts, thrilled by the amazing natural benefits of Shea to mankind.</S_P>
        <S_Div>
            <InformationCard title={"Driven"} icon={faFire} textContent={cardInformationOne}/>
            <InformationCard title={"Organic"} icon={faTree}textContent={cardInformationTwo}/>
            <InformationCard title={"Traditional"} icon={faCogs} textContent={cardInformationThree}/>
            <AdditionalInformation textContentOne={textContentOne} textContentTwo={textContentTwo}/>
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
