import React from 'react';
import './Home.css';
import './GeneralSection.css'
import image1 from '../Images/image.png';
function Home() {
  return (
    <section id="Home" className='general home'>
      <div class="hero-section">
        <div className="intro">
          <div class="first-line">Hello, I'm <br/>
            <span class="name">Rakshit  <br/> Ranpariya.</span> 
          </div>
          <p>A passionate Software Developer <br/> who loves building Effecient Solutions.</p>
          <button class="custom-button">View My Work</button>
        </div>
        <div class="profile-image">

          <img class="image" src={image1} alt="Profile" />
        </div>
      </div>
      
      
    </section>
  );
}

export default Home;
