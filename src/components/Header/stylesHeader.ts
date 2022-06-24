import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 2% 0;
  background-color: #fff;
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMainTitle = styled.h1`
  font-weight: 700;
  font-size: 56px;
  margin: 0;
  & span {
    color: rgb(72, 127, 90);
    background: rgb(255, 255, 255);
    text-shadow: rgb(0 0 0) 1px 1px;
  }
`;
