import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Home } from '../pages/Home'
import { Main } from '../Main/Main'
import { FullPageAd } from '../pages/FullPageAd'
import './App.css'

export const App = () => {
  const fpaPaths = [
    '/gubagoo',
    '/live-person',
    '/live-person-2',
    // '/contact-at-once'
  ]

  return (
    <div className="app">
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path={fpaPaths}>
              <FullPageAd />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
    </div>
  )
}
