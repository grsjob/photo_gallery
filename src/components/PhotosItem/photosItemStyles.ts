import styled from "styled-components";

export const StyledPhotoDescription = styled.div`
  background-color: #fff;
  height: 120px;
  position: relative;
  margin-left: -20px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: #acacac;
    border-top: 0;
    border-right: 0;
    margin-top: -20px;
    overflow: visible;
  }
`;

export const StyledPhotosItem = styled.li`
  width: 300px;
  margin: 3%;
  display: flex;
  flex-direction: column;
`;

export const StyledAthorTitle = styled.h2`
  text-align: center;
  margin: 0;
`;
