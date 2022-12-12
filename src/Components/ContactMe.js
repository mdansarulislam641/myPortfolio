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
        });
    };

    return (
        <section id='contact-me' className='py-20 bgg '>
          <div className='mx-5'>
          <div className='pb-10'>
          <h1 className='text-amber-600 text-5xl font-extrabold font-mono text-center '>Contact Me </h1><h2 className='text-center text-white text-xl mt-0'>Get In Touch</h2>
          </div>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-10 items-center max-w-screen-xl mx-auto'>
                <div className='text-center md:text-left'>
                    <p className='text-xl text-white'>i'd love if your reached out to me. even it's just to say "Hey!" Don't hesitate Drop me a Line and i'll get back to you ASAP! </p>
                   <h2 className='text-amber-400 text-xl'>Email : mdansarulislam641@gmail.com</h2>
                   <h3 className='text-xl text-amber-700'>Phone : 01786891119</h3>
                   <h4 className='text-amber-400 text-xl'>Location : Thakurgaon , Rangpur</h4>
                   <a className='text-xl hover:text-amber-500  text-white link link-hover' href="https://github.com/mdansarulislam641">github</a>
                   <a className='text-xl  hover:text-amber-500 mx-2 text-white link link-hover' href="https://www.linkedin.com/in/md-ansarul-haque/">Linkedin</a>
                   <a className='text-xl  hover:text-amber-500 text-white link link-hover' href="https://www.linkedin.com/in/md-ansarul-haque/">facebook</a>

                </div>
                <div>

                <form ref={form} onSubmit={sendEmail}>
      <label className='text-white'>Name</label>
      <input className='input mt-1 input-bordered w-full' type="text" name="user_name" placeholder='Your Name' />
      <label  className='text-white'>Email</label>
      <input className='input mt-1 input-bordered w-full' type="email" name="user_email" placeholder='Your Email'/>
      <label className='text-white'>Message</label>
      <textarea className='input input-bordered w-full h-32 py-5' name="message"  placeholder='Your Message'/>
      <input className='btn btn-primary w-full mt-5' type="submit" value="Send" />
    </form>


                    {/* <form action="">
                        <div>
                        <label className='text-white' htmlFor="">Full Name</label>
                        <input className='input mt-1 input-bordered w-full' type="text" name="name" placeholder='Your name' id="" />
                        </div>
                        <div className='mt-5'>
                        <label className='text-white' htmlFor="">Your Message</label>
                      <textarea className='input input-bordered w-full h-32 py-5' placeholder='Your Message' name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary w-full mt-5'>submit</button>
                    </form> */}
                </div>
            </div>
           
          </div>
        </section>
    );
};

export default ContactMe;