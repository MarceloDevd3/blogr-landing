import React from 'react';
import phone from '../images/illustration-phones.svg';

export default function Section2() {
    return (
        <section id="state-of-art">
           <div className='state--container'>
           <div id='state-img' className="img-container">
            <img src={phone} alt="phone-images"/>
           </div>
           <article id="state-of-art--info">
            <h3 id="state-title" className="blogr-title blue">State of the Art Infrastructure</h3>
            <p id="state-sub-text" className="blogr-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
</p>
           </article>
           </div>
        </section>
    )
}