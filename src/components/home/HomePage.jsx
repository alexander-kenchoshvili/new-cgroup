import React from 'react';
import Intro from './intro/Intro';
import Offer from './offer/Offer';
import Sequence from './sequence/Sequence';
import Projects from './projects/Projects';
import Blog from './blog/Blog';
import {useEffect} from 'react';




function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <div className='homePage'>
    <Intro />
    <Offer />
    <Sequence />
    <Projects />
    <Blog />
 </div>
}

export default HomePage;
