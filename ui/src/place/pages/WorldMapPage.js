import React from 'react'
import styled from 'styled-components';
import { CofinWorldMap } from 'place';

const WorldMap = () =>{
    return (<>
        <CofinWorldMap/>
    </>)
}


export default WorldMap;

const WorldMapDiv = styled.div`
    text-align: center;
`