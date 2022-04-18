import styled from "styled-components";

export const CommonWrapper = styled.div`
  width: 40%;
  border: solid 2px #6b705c;
  border-radius: 5px;
  margin: 20px;
  position: relative;
  height: 500px;
`;

export const FormDiv = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 80px;
  text-align:center;
`;

export const Heading = styled.p`
  color: #6b705c;
  font-size: 24px;
  font-weight: lighter;
  position: absolute;
  top: -510px;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: #fff;
  width: 210px;
  margin: auto;
  height: 36px;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  color: #fff;
  background-color: #02c39a;
  outline: none;
  border: none;
  border-radius: 3px;
  text-align: center;
  :hover{
    background-color: #00a896;
  }
`;
