import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from '../component/Home';
import aboutus from '../component/Aboutus';

export default function Navbar() {
        return (
            <Router>
               <nav>
                <Link to="/">--HOME--</Link> |
                <Link to="/About">--ABOUT US--</Link> |
               </nav>

                  <Switch>
                      <Route exact path='/' component={home} />
                      <Route path='/About' component={aboutus} />
                  </Switch>
              </Router>
        )
}
