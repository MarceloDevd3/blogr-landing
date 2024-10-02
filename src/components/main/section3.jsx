import React from 'react';

import laptop from '../images/illustration-laptop-mobile.svg';
import laptopDesk from '../images/illustration-laptop-desktop.svg';

export default function Section1() {
    return (
        <section id="blogr-end">
            <div className='container'>
            <div id="info-end-blogr">
              <article id="info-1-end">
                <h3 className="blogr-title blue">Free, open, simple</h3>
                <p className="blogr-text">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
</p>
              </article>
              <article id="info-2-end">
                <h3 className="blogr-title blue">Powerful tooling</h3>
                <p className="blogr-text"> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
</p>
              </article>
            </div>
            <div className='img-container'>
              <img src={ laptop } alt="laptop--image" className="mobile" />
              <img src={ laptopDesk  } alt="laptop--image" className="desk" id="dt-2" />
            </div>
            </div>
        </section>
    )
}