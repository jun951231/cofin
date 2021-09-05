import React from 'react'
import { Link, Switch } from 'react-router-dom'
import styled from 'styled-components';

const Navi = () =>(
    <>
    <Nav>
        <NavList>
            <NavItem><Link to='cofin-chart'>차트보기</Link></NavItem>
            <NavItem><Link to = 'vaccineHR'>백신안전확인</Link></NavItem>
        </NavList>
    </Nav>
    </>

);
export default Navi
const NavItem = styled.li`
    width: 10%;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`
const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`