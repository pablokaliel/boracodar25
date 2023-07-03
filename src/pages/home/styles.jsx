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

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    order: -1;
    width: 90%;
  }
`;

export const ContainerVideo = styled.div`
  width: 960px;
  height: 540px;
  border-radius: 32px;
  overflow: hidden;

  video{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }

  @media (max-width: 900px) {
    width: 90%;
    height: 450px;
  }
`;
