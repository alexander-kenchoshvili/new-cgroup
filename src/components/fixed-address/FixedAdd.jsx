import {useState, useEffect} from 'react';
import './FixedAdd.css';

function FixedAdd() {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  
  const listenToScroll = () =>{
    let heightToHideFrom = getOffset(document.querySelector("#footer-section")) - window.innerHeight;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;   
    if(winScroll > heightToHideFrom){
      isVisible && 
        setIsVisible(false);
    }else{
      setIsVisible(true);
    }
  };
  const getOffset = (element) =>{
    const rect = element.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

  }


  return (

      <div className='fixed-address'  >
          <div className='container'>
            { isVisible &&
          <div className="fixed-location" id='hide' ><a href="https://www.google.com/maps/place/CGroup.Ge+-+Web+Development+Company/@41.7254039,44.7708103,15z/data=!4m5!3m4!1s0x0:0x1410f2af64b5ab36!8m2!3d41.7253622!4d44.7707413" target="_blank" rel="noopener noreferrer">25 Pekini Avenue, Tbilisi</a></div>
          }
          </div>
      </div>
    
  )
}

export default FixedAdd