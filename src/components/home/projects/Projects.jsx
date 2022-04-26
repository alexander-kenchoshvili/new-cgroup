import {useEffect} from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {


  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);


  return <div className='project-section'> 
      <div className='container'>
        <div className='inner-container'>
          <div className='project-title' data-aos="zoom-in-left" >OUR PROJECTS</div>
          <div className='row'>
            {images.map((item,index)=>{
              return (
                <div className='col-xl-4 box-wrap ' key={index}>
                  <div className='project-cards' data-aos="fade-up" >
                    <Link to='#' target='_blank'>
                      <div className='img-container'>
                        <img src={item.url}  alt="project-card" />
                      </div>
                      <div className='project-captions'>
                        <h2>{item.name}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='project-link' data-aos='zoom-in-up' >
              <Link to='/projects'>
                  <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14.855" height="12" fill='#fcb64e' viewBox="0 0 16.855 14"><g id="Group_2" data-name="Group 2"><path id="Path_10" data-name="Path 10" className="cls-1" d="M.947,47.352l-.026.006H12.2L8.654,43.8a.931.931,0,0,1,0-1.309l.552-.552a.923.923,0,0,1,1.3,0l6.078,6.077a.929.929,0,0,1,0,1.307l-6.078,6.078a.924.924,0,0,1-1.3,0l-.552-.552a.913.913,0,0,1-.269-.651.886.886,0,0,1,.269-.639L12.24,49.99H.935A.955.955,0,0,1,0,49.044v-.781A.937.937,0,0,1,.947,47.352Z" transform="translate(0 -41.674)"></path></g></svg>
                  <span>See Our Projects</span>
              </Link>
            </div>
        </div>
      </div>
  </div>;
}


const images = [
  { name: 'Fortuna Travel',
    title:'Travel Agency',
    url: '/images/Mask Group 6.png',
    text: 'Placerat overalls unknowing oars rung are cliff insert',
  },
  {
    name: 'Office1',
    title:'E-Commerce',
    url: '/images/Mask Group 9.png',
    text: 'Alcohol skirting bartered unequal elementum furies office avon fatten scirpus him shall boom denied',
  },
  {
    name: 'Kumisi',
    title:'Food Company',
    url: '/images/Mask Group 14.png',
    text: 'Placerat overalls unknowing oars rung are cliff insert',
  },
  { name: 'Fortuna Travel',
    title:'Travel Agency',
    url: '/images/Mask Group 6.png',
    text: 'Placerat overalls unknowing oars rung are cliff insert',
  },
  {
    name: 'Office1',
    title:'E-Commerce',
    url: '/images/Mask Group 9.png',
    text: 'Alcohol skirting bartered unequal elementum furies office avon fatten scirpus him shall boom denied',
  },
  {
    name: 'Kumisi',
    title:'Food Company',
    url: '/images/Mask Group 14.png',
    text: 'Placerat overalls unknowing oars rung are cliff insert',
  },
]

export default Projects;



// {[...Array(n)].map((e,i) => <span key={i}  >alex</span> )}