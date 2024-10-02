import React from 'react';
import Dropdown from './dropdown';
import logo from '../images/logo.svg';
import Open from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';
export default function Nav() {

    const [menu, setMenu] = React.useState(false);

    const hundleClick = () => {
         setMenu(prevState => !prevState);
    }

    return (
        <header>
         <div className='menu-area'>
         <a href="index.html"><img src={logo} alt="logo"/></a>
         <button id="bars-menu" onClick={hundleClick}>{menu ? <img src={Close} alt="icon"/> : <img src={Open} alt="icon"/> } </button>
          <nav className={menu ? "navbar active" : "navbar"}>
            <Dropdown/>
           <div className='row'></div>
            <div className="btn-items">
              <button id="login">Login</button>
              <button id="sign-up">Sign Up</button>
            </div>
          </nav>
         </div>
         <article id="header-content">
            <div className='limite'>
              <h1 id="header--title">A modern <br/> publishing platform</h1>
              <p id="header-sub-info">
              Grow your audience and build your online brand</p>
            </div>
            <div id="header-btn-line">
              <button id="white-btn">Start for Free</button>
              <button id="orange-btn">Learn More</button>
            </div>
         </article>
        </header>
    )
}