import React, { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import Profile from '../components/profile/Profile';
import Intro from '../components/intro/Intro';
import Skill from '../components/skill/Skill';
import Social from '../components/social-experience/Social';
import Navbar from '../components/navbar/Navbar';

const Aboutme = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 300,
      },
    );
  }, []);

  return (
    // 라우터구간
    <>
      <Navbar item={['긍정적인', '배움을 즐기는', '열정있는']} />
      <div className="about__me">
        <div className="grid">
          <div className="row__one">
            <Profile />
            <Intro />
          </div>
          <div className="row__two col-md-12">
            <Skill />
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
