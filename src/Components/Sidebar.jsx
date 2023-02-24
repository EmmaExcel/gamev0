import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='circle-profile'>

        </div>
      <nav className='sidebar-nav'>
        <ul>
            
                <Link to='/'><li><i class="fa-solid fa-house"></i></li></Link>
            
            
                <li><i  class="fa-solid fa-table-list"></i></li>
            
            
                <li><i class="fa-solid fa-download"></i></li>
        
            
                <li><i class="fa-solid fa-cart-shopping"></i></li>
            
            
                <li><i class="fa-solid fa-gear fa-spin"></i></li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
