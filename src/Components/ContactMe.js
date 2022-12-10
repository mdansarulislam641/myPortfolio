import React from 'react';
import getInTouch from '../assets/getInTouch.jpg';
const ContactMe = () => {
    return (
        <section id='contact-me' className='py-20'>
            <h1 className='text-5xl font-extrabold font-mono text-center mb-10'>Contact Me</h1>
            <div className='grid grid-cols-1 mx-5 md:grid-cols-2 gap-10 items-center'>
                <div>
                    <img className='w-full rounded-2xl' src={getInTouch} alt="" />
                </div>
                <div>
                    <form action="">
                        <div>
                        <label className='text-white' htmlFor="">Full Name</label>
                        <input className='input mt-1 input-bordered w-full' type="text" name="name" placeholder='Your name' id="" />
                        </div>
                        <div className='mt-5'>
                        <label className='text-white' htmlFor="">Your Message</label>
                      <textarea className='input input-bordered w-full h-32 py-5' placeholder='Your Message' name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary w-full mt-5'>submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;