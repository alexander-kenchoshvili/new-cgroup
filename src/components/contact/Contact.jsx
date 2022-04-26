import {useState,useEffect} from 'react';
import './Contact.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() =>{
        Aos.init({duration: 2000});
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [values,setValues] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    });
    
    const handleClick = (e)=>{e.target.previousElementSibling.classList.add('active')};
    const removeActive = (e)=>e.target.previousElementSibling.classList.remove('active');
    const handleNameInputChange = (event) =>{
        setValues({...values, name: event.target.value})
    }
    const handleEmailInputChange = (event) =>{
        setValues({...values, email: event.target.value})
    }
    const handlePhoneInputChange = (event) =>{
        setValues({...values, phone: event.target.value})
    }
    const handleMessageInputChange = (event) =>{
        setValues({...values, message: event.target.value})
    }
    const [submitted,setSubmitted] = useState(false);
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(values.name && values.email && values.phone && values.message){
            setValid(true);
        }
        setSubmitted(true);
    }
    const [valid,setValid] = useState(false);

  return (
    <div className='contact-section'>
        <div className='inner-container'>
            <div className="contact-items">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="left">
                            <div className="title" data-aos="zoom-in-right" >CONTACT</div>
                            <img src="/images/illustration.svg" alt="contact" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="right">
                            <div className="info">
                                <div className="info-items" data-aos="zoom-in" >
                                    <span>Location</span>
                                    <a href="https://www.google.com/maps/place/CGroup.Ge+-+Web+Development+Company/@41.7254039,44.7708103,15z/data=!4m5!3m4!1s0x0:0x1410f2af64b5ab36!8m2!3d41.7254039!4d44.7708103" target="_blank" rel="noopener noreferrer">25 Pekini Avenue, Tbilisi</a>
                                </div>
                                <div className="info-items" data-aos="zoom-in" >
                                    <span>Phone</span>
                                    <a href="tel:+995558168918">(+995) 558 168 918</a>
                                </div>
                                <div className="info-items" data-aos="zoom-in">
                                    <span>E-mail</span>
                                    <a href="mailto:info@cgroup.ge">info@cgroup.ge</a>
                                </div>
                            </div>
                            <form action="" onSubmit={handleSubmit} >
                                {submitted && valid? <div className='register'>The message has been sent</div> : null}
                                <div className="input-forms" data-aos="zoom-in-right" >
                                   <label  htmlFor="">Name</label>
                                  <input  onBlur={removeActive}  onFocus={handleClick}  onChange={handleNameInputChange}  value={values.name} type="text" name='name' />
                                  {submitted && !values.name? <span className='error-alert' >This field is required </span> :null}
                                </div>
                                <div className="input-forms" data-aos="zoom-in-right" >
                                   <label   htmlFor="">Email</label>
                                  <input  onBlur={removeActive}  onFocus={handleClick}  onChange={handleEmailInputChange} value={values.email}  type="email" name='mail' />
                                  {submitted && !values.email? <span className='error-alert'>This field is required </span> :null}
                                </div>
                                <div className="input-forms" data-aos="zoom-in-right" >
                                   <label htmlFor="">Phone</label>
                                  <input onBlur={removeActive}  onFocus={handleClick} onChange={handlePhoneInputChange} value={values.phone} type="number" name='phone' />
                                  {submitted && !values.phone? <span className='error-alert'>This field is required </span> :null}
                                </div>
                                <div className="input-forms" data-aos="zoom-in-right" >
                                   <label htmlFor="">Message</label>
                                  <input onBlur={removeActive}  onFocus={handleClick} onChange={handleMessageInputChange } value={values.message} type="text" name='message' />
                                  {submitted && !values.message? <span className='error-alert'>This field is required </span> :null}
                                </div>
                                <div className='form-btn'>
                                    <button>
                                    <svg id="moreArrow" xmlns="http://www.w3.org/2000/svg" width="9.632" height="8" viewBox="0 0 9.632 8"><g id="Group_2" data-name="Group 2"><path id="Path_10" data-name="Path 10" d="M.541,44.919l-.015,0H6.971L4.945,42.891a.532.532,0,0,1,0-.748l.315-.315a.527.527,0,0,1,.744,0L9.478,45.3a.531.531,0,0,1,0,.747L6,49.52a.528.528,0,0,1-.744,0l-.315-.315a.522.522,0,0,1-.154-.372.506.506,0,0,1,.154-.365l2.049-2.042H.534A.546.546,0,0,1,0,45.886v-.446A.535.535,0,0,1,.541,44.919Z" transform="translate(0 -41.674)" fill="#4d4d4d"></path></g></svg> Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact