import React from "react";
import S from "styled-components";

const AdditionalInformation = ({textContentOne, textContentTwo}) => {
  return (
    <S_Div>
      <S_P>{textContentOne}</S_P>

      <S_P>{textContentTwo}</S_P>

      </S_Div>
  );
};

export default AdditionalInformation;

const S_Div = S.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 75px auto 0 auto;
`;

const S_P = S.p`
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    width: 75%;
    margin: 25px auto;
    color: #fff;
`;
