import React from 'react';
import './Header.css'

import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">
    <nav className = "nav">
      <ul className="ul">
        <li className = "li"><Link className = "link" to='/image'>Image</Link></li>
        <li className = "li"><Link className = "link" to='/alisa'>Alisa</Link></li>
        <li className = "li"><Link className = "link" to='/nasa'>NASA</Link></li>
        <li className = "li"><Link className = "link" to='/portal'>Portal</Link></li>
        <li className = "li"><Link className = "link" to='/icon'>Icon</Link></li>
        <li className = "li"><Link className = "link" to='/button'>Button</Link></li>
        <li className = "li"><Link className = "link" to='/group_button'>Group Button</Link></li>
        <li className = "li"><Link className = "link" to='/chip'>Chip</Link></li>
        <li className = "li"><Link className = "link" to='/badge'>Badge</Link></li>
        <li className = "li"><Link className = "link" to='/list_group'>List Group</Link></li>
        <li className = "li"><Link className = "link" to='/input'>Input</Link></li>
        <li className = "li"><Link className = "link" to='/tabs'>Tabs</Link></li>
        <li className = "li"><Link className = "link" to='/tooltip'>Tooltip</Link></li>
        <li className = "li"><Link className = "link" to='/modal_window'>ModalWindow</Link></li>
      </ul>
    </nav>
  </header>
)



export default Header;
