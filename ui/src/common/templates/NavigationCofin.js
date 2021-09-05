import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCofin = () => (
<nav class="navi">
    <ul>
        
        <li type='none'>
            <Link to='/home'>코핀홈페이지</Link> &nbsp;
            <Link to='/free-board'>자유게시판</Link> &nbsp;
            <Link to='/write'>글쓰기</Link></li>
        
    </ul>
</nav>
)

export default NavigationCofin