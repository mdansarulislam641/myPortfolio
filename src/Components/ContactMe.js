import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
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
          <h1  data-aos="fade-down" className='text-amber-600 text-5xl font-extrabold font-mono text-center '>Contact Me </h1><h2 className='text-center text-white text-xl mt-0'>Get In Touch</h2>
          </div>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-10 items-center max-w-screen-xl mx-auto'>
                <div  data-aos="fade-down" className='text-center md:text-left'>
                    <p className='text-xl text-white'>i'd love if your reached out to me. even it's just to say "Hey!" Don't hesitate Drop me a Line and i'll get back to you ASAP! </p>
                   <h2 className='text-amber-400 text-xl'>Email : mdansarulislam641@gmail.com</h2>
                   <h3 className='text-xl text-amber-400'>Phone : 01786891119</h3>
                   <h4 className='text-amber-400 text-xl'>Location : Thakurgaon , Rangpur</h4>
                   <a className='text-xl hover:text-amber-500  text-white link link-hover hover:text-2xl transition-all duration-700' href="https://github.com/mdansarulislam641">github |</a>
                   <a className='text-xl   hover:text-amber-500 mx-2 text-white link link-hover hover:text-2xl transition-all duration-700' href="https://www.linkedin.com/in/md-ansarul-haque/">Linkedin |</a>
                   <a className='text-xl hover:text-2xl transition-all duration-700  hover:text-amber-500 text-white link link-hover' href="https://www.linkedin.com/in/md-ansarul-haque/"> facebook</a>

                </div>
                <div  data-aos="fade-up " className='shadow-lg shadow-blue-500 py-10 px-10 rounded-2xl'>

                <form ref={form} onSubmit={sendEmail}>
      <label className='text-white'>Name</label>
      <input  className='hover:-skew-x-12 transition-all duration-700 input mt-1 input-bordered w-full' type="text" name="user_name" placeholder='Your Name' />
      <label  className='text-white'>Email</label>
      <input className='hover:-skew-x-12 transition-all duration-700 input mt-1 input-bordered w-full' type="email" name="user_email" placeholder='Your Email'/>
      <label className='text-white'>Message</label>
      <textarea className='input hover:-skew-x-12 transition-all duration-700 input-bordered w-full h-32 py-5' name="message"  placeholder='Your Message'/>
      <input className='btn hover:bg-transparent hover:border-amber-600 border transition-all duration-700 hover:text-3xl btn-primary w-full mt-5' type="submit" value="Send" />
    </form>


                </div>
            </div>
           
          </div>
        </section>
    );
};

export default ContactMe;