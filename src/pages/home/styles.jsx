import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Swapper = styled.div`
  width: 1048px;
  height: 660px;
  display: flex;
  margin-top: 120px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerVideo = styled.div`
  width: 100%;

  border-radius: 32px;
  border: 0.2px solid #fff;
  overflow: hidden;
`;

export const DivMob = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const TitleMobile = styled.span`
  margin-top: 20px;
`;
