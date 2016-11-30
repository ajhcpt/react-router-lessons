import React from 'react'
import NavLink from './NavLink'

const Repos = ({children}) => {
  return(
    <div>
      <ul>
        <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
      </ul>
      {children}
    </div>
  )
};

export default Repos;