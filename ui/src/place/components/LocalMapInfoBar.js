import React from "react";
import styled from 'styled-components'

const LocalMapInfoBar = () => {
  return (
    <InfoUl>
        <li>
        <LabelDiv><InfoLabel>진료소 A</InfoLabel></LabelDiv>
        <InfoDiv></InfoDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 B</InfoLabel></LabelDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 C</InfoLabel></LabelDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 D</InfoLabel></LabelDiv>
        </li>
    </InfoUl>
  );      
};

export default LocalMapInfoBar

const InfoUl = styled.ul`
margin-top: 0;
list-style: none;
padding-left: 8px;
`

const LabelDiv = styled.div`
  width: 95%;
  height: 50px;
  border: solid 1px black;
  text-align: center;
`
  
  const InfoDiv = styled.div`
  width: 95%;
  height: 400px;
  border: solid 1px black;
  margin: 0;
`

const InfoLabel = styled.label`
  display: inline-block;
  font-size: 1.5em;
  font-weight: 600;
  margin: 5%;
`