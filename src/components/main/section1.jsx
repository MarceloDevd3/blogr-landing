import React from 'react';
import editorIMG from '../images/illustration-editor-mobile.svg';
import editorIMGDesk from '../images/illustration-editor-desktop.svg';

export default function Section1() {
    return (
        <section id="blogr-container">
            <h3 className="blogr-title blue" id="ft-test">Designed for the future</h3>
            <div className='container'>
            <div id="info-blogr">
              <article id="info-1">
                <h3 className="blogr-title blue">Introducing an extensible editor</h3>
                <p className="blogr-text">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
              </article>
              <article id="info-2">
                <h3 className="blogr-title blue"> Robust content management</h3>
                <p className="blogr-text"> Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
</p>
              </article>
            </div>
            <div className='img-container'>
              <img src={ editorIMG  } alt="editor--image" className="mobile" />
              <img src={ editorIMGDesk } alt="editor--image" className="desk" id="dt-1"/>
            </div>
            </div>
        </section>
    )
}