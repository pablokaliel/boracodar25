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

export const Header = styled.div`
  height: 64px;

  display: flex;
  align-items: center;

  padding: 12px;
  gap: 24px;
  margin-bottom: 24px;

  border-radius: 99px;
  box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
`;

export const LeftItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  gap: 12px;
  padding: 12px;

  border-radius: 99px;
  box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);

  .search {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
  }
`;

export const Items = styled.button`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  border: none;
  background-color: transparent;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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

export const DivNav = styled.div`
  display: flex;
  gap: 16px;
  position: relative;

  .copy {
    position: absolute;
    bottom: -12px;
    right: -18px;
    font-size: 12px;
  }
`;

export const DivRoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 440px;
  height: 48px;

  padding: 16px 12px;
  gap: 16px;

  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  border-radius: 999px;

  span {
    font-size: 15px;
    display: flex;
    gap: 4px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const DivMob = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 20px;

  @media (min-width: 1025px) {
    display: none;
  }
`;
export const TitleMobile = styled.span`
  margin-bottom: 20px;
`;
