import React from 'react';
import arrowLight from '../images/icon-arrow-light.svg';
import arrowDark from '../images/icon-arrow-dark.svg';

export default function dropdown() {


   const [dropDownItem1, setDropDownItem1] = React.useState(false)
   const [dropDownItem2, setDropDownItem2] =  React.useState(false)
   const [dropDownItem3, setDropDownItem3] =  React.useState(true)


   const hundleDropItem1 = () => {
    setDropDownItem1(prev => !prev)
   }

   const hundleDropItem2 = () => {
    setDropDownItem2(prev => !prev)
   }


   const hundleDropItem3 = () => {
    setDropDownItem3(prev => !prev)
   }

    return (
        <article id="dropdown--container">
           <div className='dropdown' >
           <div className='Dropdown-title' onClick={hundleDropItem1}>
              <h2 >Product</h2> 
              <img src={arrowDark} alt="arrow" className={dropDownItem1 ? 'arrow active' : 'arrow'}/>
            </div>
            <div className={dropDownItem1 ? 'Dropdown--content active' : 'Dropdown--content'}>
              <ul>
                <li className='dropdown-item'> Overview</li>
                <li className='dropdown-item'>Pricing</li>
                <li className='dropdown-item'>Marketplace</li>
                <li className='dropdown-item'>Features</li>
                <li className='dropdown-item'>Integrations</li>
              </ul>
            </div>
           </div>
           <div className='dropdown'>
           <div className='Dropdown-title' onClick={hundleDropItem2}>
              <h2>Company</h2>
              <img src={arrowDark} alt="arrow" className={dropDownItem2 ? 'arrow active' : 'arrow'}/>
            </div>
            <div className={dropDownItem2 ? 'Dropdown--content active' : 'Dropdown--content'}>
              <ul>
                <li className='dropdown-item'>About</li>
                <li className='dropdown-item'>Team</li>
                <li className='dropdown-item'>Blog</li>
                <li className='dropdown-item'>Careers</li>
              </ul>
            </div>
           </div>
           <div className='dropdown' >
           <div className='Dropdown-title' onClick={hundleDropItem3}>
              <h2>Connect</h2>
              
              <img src={arrowDark} alt="arrow" className={dropDownItem3 ? 'arrow active' : 'arrow'}/>
            </div>
            <div className={dropDownItem3 ? 'Dropdown--content active' : 'Dropdown--content'}>
              <ul>
                <li className='dropdown-item'>Contact</li>
                <li className='dropdown-item'>Newsletter</li>
                <li className='dropdown-item'>LinkedIn</li>
              </ul>
            </div>
           </div>
        </article>
    )
}