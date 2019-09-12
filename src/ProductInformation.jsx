import React from "react";
import S from "styled-components";

import AdditionalInformation from './AdditionalInformation';

const ProductInformation = ({title}) => {
    const productInformationTextOne =`Our target customers are enterprises who require unrefined Shea Butter as part of their raw materials, whether in the cosmetics, pharmaceutical or food industries.`;
    const productInformationTextTwo =`SUSTINEO MAGNUS’ unrefined Shea Butter can be used as is, raw and unadulterated, and or for use in cosmetics, pharmaceuticals and in some cases in the confectionary and chocolate industry as a cocoa butter substitute. `;
    return(
    <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <AdditionalInformation textContentOne={productInformationTextOne} textContentTwo={productInformationTextTwo}/>\
    </ContentContainer>
    );

}

export default ProductInformation;

const ContentContainer = S.section`
    padding: 20px;
    background-color: #b87a05;
`;
const ContentTitle = S.h2`
    width: 100%;
    font-size: 7rem;
    color: #fff;
    text-align: center;
    margin-top: 75px;
    font-weight: 400;
`;
