import { styled } from "styled-components";

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

  &:active {
    scale: 0.8;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;