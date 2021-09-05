import React from "react"
import logo from '../images/virus.png';
import logo2 from '../images/inform.jpg';
import logo3 from '../images/world.png';
import logo4 from '../images/piston.png'
import logo5 from '../images/news.png'
import styled from "styled-components";

const CofinHomeMain = () => (
<div>
    <div align='center'>
        <img src={logo} width="750" height="750"/>   
    </div>

    <div align='center' >         
        <form>
            <button type="submit" class="subm">
                <img src={logo2} width="200" height="200" border-radius='70%'/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo3} width="200" height="200"/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo4} width="200" height="200"/>&nbsp;
            </button>
            <button type="submit" class="subm">
                <img src={logo5} width="200" height="200"/>
            </button>
        </form>
    </div>
</div> 
)

export default CofinHomeMain