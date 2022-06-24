import React from 'react'
import {AppBar, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/cart'>Cart</Link>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default NavBar