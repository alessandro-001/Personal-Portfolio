import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Myself from '../../src/assets/Me-noBg.png';
import NortcodersCertificate from '../../src/assets/NorthcodersCertificate.png';
import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

//temporary placeholder image for MMU certificate
const placeholderText = encodeURIComponent('Certificate available in 2026 \nFinal mark: Distinction');
const Mmulogo = `https://placehold.co/1916x1352?text=${placeholderText}&font=roboto`;

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
            I've always been captivated by technology and its power to transform the world. My journey began as a dental technician, 
            where I developed a keen eye for precision and high standards, skills I now apply to software development. 
            I thrive in dynamic environments, embracing adaptability, continuous learning, and effective time management. 
            Passionate about collaboration, I believe in crafting innovative solutions while valuing the diverse perspectives of every team member.
            With a blend of precision from my dental technology background and the creativity inspired 
            by my love for technologies and music, I'm excited to make a meaningful impact.
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
              Software Development Bootcamp Certificate - Northcoders - 2023
            </figcaption>
          </div>

          {/* Certificate 2 */}
          <div className='flex items-center gap-4'>
            <figure className='w-36 md:w-48 shadow-lg rounded-lg overflow-hidden'>
              <img 
                src={Mmulogo} 
                className='w-full cursor-pointer'
                alt='MMU Certificate'
                loading='lazy'
                onClick={() => openModal(Mmulogo)}
              />
            </figure>
            <figcaption className='text-left text-xl text-slate-700 dark:text-slate-300'>
              MSc Computer Science - Manchester Metropolitan University - 2025
            </figcaption>
          </div>

        </div>
      </div>

      {/* Modal X */}
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
