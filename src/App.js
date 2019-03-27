import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import {Link} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link className='links' to='/'>Home</Link>
              <Link className='links' to='/about'>About</Link> 
          </div>
        </nav>
        {routes}
      </div>
      </HashRouter>
    )
  }
}