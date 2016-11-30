import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

const App = ({children}) => {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul role='nav'>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>

        {children || <Home/>}
      </div>
    )
};

export default App;
