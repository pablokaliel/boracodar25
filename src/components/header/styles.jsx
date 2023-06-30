import { styled } from "styled-components";

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

  button {
    height: 24px;
    width: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    color: #fff;

    &:active {
      scale: 0.9;
    }
  }

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

  &:active {
    scale: 0.8;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
