import React from "react";
import S from "styled-components";

const InformationCard = ({title, textContent}) => {
    return(
        <S_div>
            <S_h3>{title}</S_h3>
            <S_p>{textContent}</S_p>
        </S_div>
    );
}
export default InformationCard;

const S_div = S.div`
    width: 30%;
    display: flex;
    align-content: center;
    flex-direction: column;
    min-width: 450px;
`;

const S_h3 = S.h3`
    width: 100%;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
`;

const S_p = S.p`
    font-size: 2rem;
    color: #000;
    margin-top: 20px;
    padding: 10px;
    text-align: left;
    line-height: 34px;
`;
