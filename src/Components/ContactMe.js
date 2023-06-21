import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dy7hso9', 'template_tl3o34d', form.current, 'FnbD4nzqExfRZA0mi')
        .then((result) => {
            console.log(result.text);
            toast.success('successfully send email')
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            toast.error(error.text)
        });
    };

    return (
        <section id='contact-me' className='py-20 bgg '>
          <div className='mx-5'>
          <div className='pb-10'>
          <h1  data-aos="fade-down" className='text-color text-5xl font-extrabold font-mono text-center uppercase'>Contact Me </h1><h2 className='text-center text-white text-xl mt-0'>Get In Touch</h2>
          </div>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-10 items-center max-w-screen-xl mx-auto'>
                <div  data-aos="fade-down" className='text-center md:text-left'>
                    <p className='text-xl text-white'>i'd love if your reached out to me. even it's just to say "Hey!" Don't hesitate Drop me a Line and i'll get back to you ASAP! </p>
                   <h2 className='text-color text-xl'>Email : mdansarulislam641@gmail.com</h2>
                   <h3 className='text-xl text-color'>Phone : 01786891119</h3>
                   <h4 className='text-color text-xl'>Location : Thakurgaon , Rangpur</h4>
                      {/* social icons  */}
            <div className="flex justify-start gap-5 pt-2 z-40">
              <a href="https://www.facebook.com/md.ansarulislam.641" target="_blank" rel="noopener noreferrer"> <BsFacebook size={24} className=" text-gray-100 cursor-pointer" /></a>
             
              <a href="https://www.linkedin.com/in/md-ansarul-haque/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={24} className=" text-gray-100 cursor-pointer"/>
              </a>
              <a href="https://github.com/mdansarulislam641" target="_blank" rel="noopener noreferrer">
              <BsGithub size={24} className=" text-gray-100 cursor-pointer"/>
              </a>
              
            </div>

                </div>
                <div  data-aos="fade-up " className='shadow-sm shadow-teal-500 py-10 px-10 rounded-2xl'>

                <form ref={form} onSubmit={sendEmail}>
      <div>
      <label className='text-white text-xl'>Name</label>
      <input  className='bg-transparent border-2 border-teal-400 text-white placeholder:text-white input mt-1 input-bordered w-full' type="text" name="user_name" placeholder='Your Name' />
      </div>
      <div className='my-2'>
      <label  className='text-white text-xl'>Email</label>
      <input className='bg-transparent border-2 border-teal-400 text-white placeholder:text-white input mt-1 input-bordered w-full' type="email" name="user_email" placeholder='Your Email'/>
      </div>
      <div>
      <label className='text-white text-xl'>Message</label>
      <textarea className='input bg-transparent border-2 border-teal-400 text-white placeholder:text-white input-bordered w-full h-32 py-5' name="message"  placeholder='Your Message'/>
      </div>
      <input className='btn hover:bg-transparent hover:border-white border-2 transition-all duration-700 bg-transparent border-teal-400 w-full mt-5' type="submit" value="Send" />
    </form>


                </div>
            </div>
           
          </div>
        </section>
    );
};

export default ContactMe;