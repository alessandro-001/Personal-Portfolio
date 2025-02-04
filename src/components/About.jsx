import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Myself from '../../src/assets/Me-noBg.png';
import NortcodersCertificate from '../../src/assets/NorthcodersCertificate.png';
import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <div className='pt-10'>
        <SectionTitle id='about-me'>About Me</SectionTitle>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='md:w-6/12'>
          <img 
            src={Myself}
            className='w-full mx-auto'
            alt='Alessandro Frondini'
            loading='lazy'
          />
        </div>
        <div className='md:w-6/12'>
          <p className='text-md text-slate-900 dark:text-slate-300 text-md md:text-xl'>
            I've always been fascinated by technology and how it can transform the world. 
            Starting as a dental technician, I honed my skills in maintaining high standards and attention 
            to detail, abilities I carry with me into the world of software development.
            I thrive on learning, adaptability, and effective time management, making me a valuable asset to any project. 
            I believe in the power of collaboration and I am committed to crafting innovative solutions and 
            valuing the unique perspectives and skills each team member brings. 
            With a blend of precision from my dental technology background and the creativity inspired 
            by my passion for cooking, I'm excited to make a meaningful impact.
          </p>
          <a 
            href='mailto:alessandrofrondini@gmail.com'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <TfiEmail className="mr-2"/>
            alessandrofrondini@gmail.com
          </a>
          <a 
            href='https://www.linkedin.com/in/alefrondini/'
            target='_blank'
            rel='Alessandro Frondini'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <BsLinkedin className="mr-2"/>
            LinkedIn
          </a>
          <a 
            href='https://github.com/alessandro-001'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
          >
            <VscGithub className="mr-2"/>
            GitHub
          </a>
        </div>
      </div>

      {/* Certification Section */}
      <div className='py-10'>
        <SectionTitle>Certifications</SectionTitle>
        <div className='flex flex-col items-start gap-8 mt-5'>
          {/* Certificate 1 */}
          <div className='flex items-center gap-4'>
            <figure className='w-36 md:w-48 shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={NortcodersCertificate}
                className='w-full cursor-pointer'
                alt='Northcoders Certificate'
                loading='lazy'
                onClick={() => openModal(NortcodersCertificate)}
              />
            </figure>
            <figcaption className='text-left text-xl text-slate-700 dark:text-slate-300'>
              Northcoders Software Development Bootcamp Certificate - 2023
            </figcaption>
          </div>

          {/* Add more certificates here */}
          {/* <div className='flex items-center gap-4'>
            <figure className='w-36 md:w-48 shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={NortcodersCertificate}
                className='w-full cursor-pointer'
                alt='Another Certificate'
                loading='lazy'
                onClick={() => openModal(NortcodersCertificate)}
              />
            </figure>
            <figcaption className='text-left text-xl text-slate-700 dark:text-slate-300'>
              Another Certificate
            </figcaption>
          </div> */}

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='relative'>
            <button 
              onClick={closeModal}
              className='absolute top-0 right-0 p-4 text-red text-8xl'
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt='Certificate_Modal'
              className='max-w-full max-h-[90vh] object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
}
