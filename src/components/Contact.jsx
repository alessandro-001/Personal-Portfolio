import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';


export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oaegebh',
        'template_dienvtz',
        form.current,
        'F_xohcByZGPvcRVBb',
      )
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
  <>
    <div id='contact' className='pt-10'>
      <SectionTitle id='about-me'>Contact</SectionTitle>
    </div>
    <div className="py-10 flex justify-center">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full sm:w-1/2">
        <div className="flex flex-col mb-4 py-2 dark:text-[#13ecd4] hover:text-blue-500 hover:dark:text-pink-500">
          <label htmlFor="user_name" className="mb-1">Name:</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="border border-gray-300 dark:border-[#13ecd4] hover:text-blue-500 dark:hover:border-pink-500 px-3 py-2 rounded-md text-slate-900 w-full"
            required
          />
        </div>
        <div className="flex flex-col mb-4 py-2 dark:text-[#13ecd4] hover:dark:text-pink-500">
          <label htmlFor="user_email" className="mb-1">Email:</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="border border-gray-300 dark:border-[#13ecd4] dark:hover:border-pink-500 px-3 py-2 rounded-md text-slate-900 w-full"
            required
          />
        </div>
        <div className="flex flex-col mb-4 py-2 dark:text-[#13ecd4] hover:dark:text-pink-500">
          <label htmlFor="message" className="mb-1">Message:</label>
          <textarea
            name="message"
            id="message"
            className="border border-gray-300 dark:border-[#13ecd4] dark:hover:border-pink-500 px-3 py-2 rounded-md text-slate-900 w-full"
            required
          ></textarea>
        </div>
        <div className='py-5 flex justify-center'>
          <button type="submit" disabled={isSent} className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">Send</button>
        </div>
        <div className='py-5 flex justify-center dark:text-[#13ecd4]'>
          {isSent && <p>Message sent!</p>}
        </div>
      </form>
    </div>
  </>
  );
}
