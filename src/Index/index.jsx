// index.jsx
import React from 'react';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import '../css/Index.css';

function index() {
  return (
    <div className="container-all">
        <div className="container-top-index">
            <div className='title-index'>
                <p className='top-text-index'>Hi</p>
                <p>I'm Pablo San Miguel</p>
                <p className='bottom-text-index'>Full Stack Developer</p>
            </div>
            <div className="image-index">
                <img className='image' src="https://i.imgur.com/Uj6pNyc.png" title='hi' />
            </div>
        </div>
        <div className="container-bottom-index">
            <p>Welcome to my portfolio! I'm Pablo San Miguel, a passionate learner currently studing DAW. 
                My enthusiasm lies in crafting innovative solutions through software development, 
                with a keen focus on both backend and front-end technologies.
            </p>
            <p>
                In this portfolio, you'll find a showcase of my projects, demonstrating my proficiency in various 
                programming languages, frameworks, and methodologies. From designing intuitive user interfaces to 
                building robust backend systems, I strive for excellence in every endeavor.
            </p>
            <p>
                Thank you for visiting, and feel free to explore my work!
            </p>
        </div>
        <Skills />
        <Projects />
    </div>
    
  );
}

export default index;