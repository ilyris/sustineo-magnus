import React from "react";
import S from "styled-components";

const AdditionalInformation = () => {
  return (
    <S_Div>
      <S_P>
        Led by Ibikunle Bolorunduro, our journey started after realizing the
        amazing benefits of Shea butter, it significant potential for grassroots
        wealth creation and the fact that over 65% of the annual production of
        its raw material (Shea Nuts) rots away in the Nigerian Shea parklands,
        year in year out.
      </S_P>

      <S_P>
        Our business runs on a scalable technology platform conceived to
        optimize its Shea nut sourcing capabilities and enable us serve any
        enterprise that require premium unrefined Shea Butter anywhere in the
        world within the shortest turnaround time.{" "}
      </S_P>
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
    background-color: #6c6c6c;
`;

const S_P = S.p`
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    width: 75%;
    margin: 25px auto;
    color: #fff;
`;
