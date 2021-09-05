import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationForJavaScript = () => (
<>
<Nav>
    <NavList>
        <NavItem><Link to='cofin-map'>cofin-map</Link></NavItem>
        <NavItem><Link to='cofin-world-map'>cofin-world-map</Link></NavItem>
    </NavList>
</Nav>
</>
)

export default NavigationForJavaScript

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid green
`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    padding: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 14px;
    margin-top: 5px;
    display: flex;
    font-size: 1.3vh;
`