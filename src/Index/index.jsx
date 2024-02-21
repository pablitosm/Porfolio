// index.jsx
import React from 'react';
import Projects from '../projects/Projects';
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
                {/* <a href="https://vitejs.dev/" target="_blank" className=''> */}
                    <img className='image' src="https://i.imgur.com/Uj6pNyc.png" />
                {/* </a> */}
            </div>
        </div>
        <div className="container-bottom-index">
            <p>Phasellus non magna lorem. Curabitur eget nisi tincidunt, 
                consectetur orci vitae, facilisis sapien. Vestibulum posuere 
                enim ut diam vulputate malesuada. Quisque pharetra, odio sit 
                amet tempus sodales, ex est ullamcorper ipsum, id tincidunt 
                felis orci eu nulla. Sed gravida sit amet lectus in finibus. 
                Nulla rutrum ultrices purus, pellentesque mollis ipsum laoreet 
                at. Vestibulum quis purus sed dui aliquam auctor. Praesent eget 
                luctus justo. Aliquam in commodo mi, aliquet dictum justo. 
                Suspendisse varius molestie vestibulum.
            </p>
        </div>
        <Projects />
    </div>
    
  );
}

export default index;