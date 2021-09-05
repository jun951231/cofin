import React, { useEffect } from "react";
import styled from 'styled-components'
/* global kakao */
const { kakao } = window;

const ConfinMap = () => {
  useEffect(() => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
      center: new kakao.maps.LatLng(37.499400, 127.029015), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    let markerPosition  = new kakao.maps.LatLng(37.499400, 127.029015); 
    
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
      console.log("loading kakaomap");
    }, []);

  return (
    <MapDiv id="map"></MapDiv>
  );      
        
};

export default ConfinMap

const MapDiv = styled.div`
min-width: 520px;
width: 80%;
height: 720px;
float: left
`