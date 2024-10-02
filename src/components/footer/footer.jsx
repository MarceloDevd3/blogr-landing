import React from 'react';
import logo from '../images/logo.svg';

export default function footer() {
    return (
        <footer id="footer-container">
        
          <div className="footer-item">
            <img src={logo} alt="footer--logo"/>
          </div>

          <div className="footer-item ft1">
            <ul>
                <li className='item--title'>
                 <span className='space'> Product</span>
                    <ul className='inner-list'>
                       <li>Overview</li>
                       <li>Pricing</li>
                       <li>Marketplace</li>
                       <li>Features</li>
                       <li>Integrations</li>
                    </ul>
                </li>
            </ul>
          </div>

          <div className="footer-item ft2">
            <ul>
                <li className='item--title'>
                <span className='space'>Company</span>
                    <ul className='inner-list'>
                       <li> About</li>
                       <li>Team</li>
                       <li>Blog</li>
                       <li>Careers</li>
                    </ul>
                </li>
            </ul>
          </div>

          <div className="footer-item ft3">
            <ul>
                <li className='item--title'>
                <span className='space'>Connect</span>
                    <ul className='inner-list'>
                       <li>Contact</li>
                       <li>Newsletter</li>
                       <li>LinkedIn</li>
                    </ul>
                </li>
            </ul>
          </div>

        </footer>
    )
}