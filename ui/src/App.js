import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'

import { CofinHomepage } from "home"
import { FreeBoardpage } from "board"
import { Writepage } from "board"
import { NavigationCofin } from 'common/index'

import {VaccineHR,
        Navi,
        CofinChart} from 'projects/index';
import VaccineResult from 'projects/VaccineResult';

import { LocalMapPage, WorldMap, NavigationForJavaScript } from 'place/index'
import styled from 'styled-components'



const App = () => (
  <>

  <NavigationCofin/>
    <Switch>
    <Route exact path='/' component= { CofinHomepage }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/free-board' component= { FreeBoardpage }/>
    <Route exact path='/write' component= { Writepage}/>
    </Switch>  
    
  <Layout>
    <Header/>
    <Navi/>
  </Layout>

  <NavigationForJavaScript/>
  <Switch>
    <Route exact path='/cofin-chart' component={CofinChart}/>
    <Route exact path='/vaccineHR' component={VaccineHR}/>
    <Route exact path='/vaccine-result' component={VaccineResult}/>

    <Route exact path='/cofin-map' component = { LocalMapPage }/>
    <Route exact path='/cofin-world-map' component = { WorldMap }/>
  </Switch>


  </>)


export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  `