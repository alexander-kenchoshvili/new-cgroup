import {useState, useEffect } from 'react';
import './Offer.css';
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';

const Offer = (e)=> {
  
  const [selected, setSelected] = useState(null);
  const toggle =(index) =>{
    if(selected === index){
      return setSelected(null)
    }
    setSelected(index)
  };
 
  const [over, setOver] = useState(0);

  console.log(over)

  
  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);
  return <div className='offer-section'>
      <div className='container'>
          <div className='offer-items'>
            <div className='row'>
              <div className='col-xl-6'>
                <div className='offer-left'>
                  <div className="horizontal-header">
                    <span data-aos="zoom-in"  className="aos-init aos-animate">SERVICES</span>
                  </div>
                  <div className='offer-services'>
                    <div className='offer-header ' data-aos="zoom-in-down" >
                      <span>We</span> Offer
                    </div>
                    <div className='offer-text' data-aos='zoom-in-up'>
                      <p>Mysteries hazel machine spake lilacs plays, already baffled, rutrum sin, unto 
                          an night hushed. Forest unto already enchanted shoulders bard plays 
                          machine. Deep valleys syllable shoulders, robins plays don, draw healthful. 
                          Fusce unto experts stealing hazel, watched mistrust, dressed conifers. Soar 
                          costs redistributing makes, fusce, draw bent noun wife valleys eyes hushed, 
                          feats sings crumbs.</p>
                    </div>
                    <div className='service-link'  data-aos='zoom-in-up'>
                      <Link to='/services'>
                          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14.855" height="12" fill='#fcb64e' viewBox="0 0 16.855 14"><g id="Group_2" data-name="Group 2"><path id="Path_10" data-name="Path 10" className="cls-1" d="M.947,47.352l-.026.006H12.2L8.654,43.8a.931.931,0,0,1,0-1.309l.552-.552a.923.923,0,0,1,1.3,0l6.078,6.077a.929.929,0,0,1,0,1.307l-6.078,6.078a.924.924,0,0,1-1.3,0l-.552-.552a.913.913,0,0,1-.269-.651.886.886,0,0,1,.269-.639L12.24,49.99H.935A.955.955,0,0,1,0,49.044v-.781A.937.937,0,0,1,.947,47.352Z" transform="translate(0 -41.674)"></path></g></svg>
                          See Our Services
                      </Link>
                    </div>
                    <div className='service-images' data-aos='fade-up'>
                      {data.map((item,index)=>{
                        return <img className={over ===index? 'service-img active'  :'service-img' }  key={index}   src={over === index? item.imgUrl : null } alt=''  />
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6'>
                <div className='service-list'>{data.map((item, index)=>{
                  return (
                        <div className="service-box"   onMouseOver={()=>setOver(index)}   key={index} data-aos='zoom-in-left' >
                          <div className='left'  >{item.numeration}</div>
                          <div className="right">
                              <h2>{item.title}</h2>
                              <div className='offer-text'>
                                <div className={selected === index ? 'text show': 'text'}>
                                    <p>{item.text}</p>
                                  </div>
                                  <button  onClick={()=> toggle(index)}  className='collapse-button'> {selected ===index ? <img src="/images/minus.svg" alt="minus" />: <img src="/images/plus.svg" alt="plus" /> } </button>
                                </div>
                          </div>
                        </div>
                        )
                    })}
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>;
}

  const data = [
    {
      imgUrl: '/images/1.png',
      numeration:1,
      title: 'Design',
      text: 'The website design expresses a company’s image and activity. It is important for it to be unique, effective, creative, easy to understand for the target audience and to best convey the content of the company.Today, a large number of users use cell phones, tablets, and other digital gadgets. So to create maximum comfort for the users, C Group pays great attention to the design of the mobile version of the website and considers every detail that is the key to your business success.C Group also offers graphic design, logo, and brand book creation.'
    },
    {
      imgUrl: '/images/2.png',
      numeration:2,
      title: "Web Development",
      text: 'In today’s digital world, your business needs a properly designed website that will work properly, be modern, creative, convenient, and secure.C Group ensures high-quality service and builds any type of website at the best price.'
    },
    {
      imgUrl: '/images/3.png',
      numeration:3,
      title:'SEO',
      text: 'Most people search for the product or service they need online. For your potential customer to easily find you through the Google search engine, you need to optimize the website (SEO - search engine optimization).SEO includes complex work, strategic, technical approach, and analysis.'
    },
    {
      imgUrl: '/images/4.png',
      numeration:4,
      title:'Social Media Management',
      text: 'C Group will help you to properly manage your marketing campaigns over the internet and stay connected with your customers. To do this, we will develop communication language and strategy, create quality content, and ensure maximum effectiveness of advertising.'
    }
  ]

export default Offer;


