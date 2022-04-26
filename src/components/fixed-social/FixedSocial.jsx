import {useEffect, useState} from 'react';
import './FixedSocial.css';

function FixedSocial() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(()=>{
    window.addEventListener("scroll",listenToScroll);
    return () => window.removeEventListener("scroll",listenToScroll);
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
    <div className='social-section'>
        <div className='container'>{
                isVisible &&
            <div className='fixed-social' id='hide' >
                <span className='social-head'>follow us</span>
                  <a href="https://www.instagram.com/cgroup.ge/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#4D4D4D" width="18" height="18" viewBox="0 0 18 18"><g id="instagram_icon" data-name="instagram icon" transform="translate(0 0)"><path id="Union_1" data-name="Union 1" className="cls-1" d="M6.176,18A6.192,6.192,0,0,1,0,11.824V6.176A6.193,6.193,0,0,1,6.176,0h5.649A6.193,6.193,0,0,1,18,6.176v5.648A6.192,6.192,0,0,1,11.824,18ZM4.236,9A4.764,4.764,0,1,0,9,4.236,4.769,4.769,0,0,0,4.236,9Zm9.3-5.277a.527.527,0,1,0,.373-.154A.53.53,0,0,0,13.532,3.723ZM5.291,9A3.709,3.709,0,1,1,9,12.709,3.713,3.713,0,0,1,5.291,9Z" transform="translate(0 0)"></path></g></svg>
                      <span className='caption'>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/CGroup.Ge/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#4D4D4D" width="8.366" height="18" viewBox="0 0 8.366 18"><g id="facebook_icon" data-name="facebook icon" transform="translate(-146.32)"><g id="Group_1" data-name="Group 1" transform="translate(146.32)"><path id="Path_9" data-name="Path 9" className="cls-1" d="M154.082,0h-1.875a4.035,4.035,0,0,0-3.091,1.021,4.3,4.3,0,0,0-.939,3.009V5.294a.6.6,0,0,1-.6.6h-.648a.6.6,0,0,0-.6.6V8.4a.6.6,0,0,0,.6.6h.648a.6.6,0,0,1,.6.6V17.4a.6.6,0,0,0,.6.6H151.3a.6.6,0,0,0,.6-.6V9.6a.6.6,0,0,1,.6-.6h1.27a.686.686,0,0,0,.668-.6l.2-1.9a.532.532,0,0,0-.541-.6h-1.6a.6.6,0,0,1-.6-.6V4.347a3.394,3.394,0,0,1,.033-.541,1.052,1.052,0,0,1,.147-.377.6.6,0,0,1,.371-.257,2.645,2.645,0,0,1,.683-.071h.947a.6.6,0,0,0,.6-.6V.6A.6.6,0,0,0,154.082,0Z" transform="translate(-146.32)"></path></g></g></svg>
                      <span className='caption'>Facebook</span>
                  </a>
                  <a href="https://twitter.com/CGroupGe" target="_blank" rel="noopener noreferrer">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="#4D4D4D" viewBox="0 0 512 512" width="18" height="20"><g id="twitter_icon"><g><g><path className="cls-1" d="M512,97.2c-19,8.4-39.3,13.9-60.5,16.6c21.8-13,38.4-33.4,46.2-58c-20.3,12.1-42.7,20.6-66.6,25.4 C411.9,60.7,384.4,48,354.5,48c-58.1,0-104.9,47.2-104.9,105c0,8.3,0.7,16.3,2.4,23.9c-87.3-4.3-164.5-46.1-216.4-109.8 c-9.1,15.7-14.4,33.7-14.4,53.1c0,36.4,18.7,68.6,46.6,87.2c-16.9-0.3-33.4-5.2-47.4-12.9c0,0.3,0,0.7,0,1.2 c0,51,36.4,93.4,84.1,103.1c-8.5,2.3-17.9,3.5-27.5,3.5c-6.7,0-13.5-0.4-19.9-1.8c13.6,41.6,52.2,72.1,98.1,73.1 c-35.7,27.9-81.1,44.8-130.1,44.8c-8.6,0-16.9-0.4-25.1-1.4c46.5,30,101.6,47.1,161,47.1c193.2,0,298.8-160,298.8-298.7 c0-4.6-0.2-9.1-0.4-13.6C480.2,137,497.7,118.5,512,97.2z"></path></g></g></g></svg>
                      <span className='caption'>Twitter</span>
                  </a>
            </div>
                }
        </div>
    </div>
  )
}

export default FixedSocial