import React from 'react'

function Header(props) {
  return (
   
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
     <a href="/" className="navbar-brand">{props.naming}</a>
     <div >
       <ul className="navbar-nav mr-auto">
         <li className="nav-item">
         <a href="/" className="nav-link">Home</a>
         </li>
       </ul>
     </div>
   </nav>
    
  )
}
export default Header;
