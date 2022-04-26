import {useEffect} from 'react';
import './Partners.css';
import background from '../../../src/turebi-gray.png';
import bcgr from '../../../src/bbt-gray.png';
import Aos from "aos";
import "aos/dist/aos.css";

function Partners() {

    useEffect(() =>{
        Aos.init({duration: 2000});
        }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


  return <div className='partner-section'>
      <div className='container'>
          <div className='inner-container'>
              <div className="partner-items">
                  <div className='partner-header' data-aos='zoom-in' >Our Partners</div>
                    {partners.map((item,index)=>{
                        return (
                            <a href="https://www.turebi.ge/ka/" rel='noopener noreferrer' key={index} target='_blank' style={{backgroundImage: `url(${item.backImg})`}} className='box'>
                                <img src={item.innerImg} alt="turebi" />
                            </a>
                        )
                    })}
              </div>
          </div>
      </div>
  </div>;
}

const partners = [
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${background}`,
        innerImg: '/images/turebi1.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    {
        backImg:`${bcgr}`,
        innerImg: '/images/bbt.png'
    },
    
]

export default Partners;
