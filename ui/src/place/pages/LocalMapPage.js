import React from "react";
import styled from 'styled-components'
import { CofinMap, LocalMapSelectionBar, LocalMapInfoBar } from "place";


const LocalMapPage = () => {
  return (
    <LayoutDiv>
      <LeftSideDiv id="left">
          <LocalMapSelectionBar/>
      </LeftSideDiv>

      <MapDiv id="map">
          <CofinMap/>
      </MapDiv>

      <RightSideDiv id="right">
          <LocalMapInfoBar/>
      </RightSideDiv>
    </LayoutDiv>
  );      
        
};

export default LocalMapPage

const LayoutDiv = styled.div`
  width: 100%;
`

const MapDiv = styled.div`
min-width: 520px;
width: 80%;
height: 720px;
float: left
`
const LeftSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 8%
`

const RightSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 11%
`