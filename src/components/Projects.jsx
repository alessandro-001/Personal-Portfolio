import React, { lazy, Suspense } from 'react';
import SectionTitle from './SectionTitle';
// import ProjectItem from './ProjectItem';
import works from '../data/projects';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectItem = lazy(() => import("./ProjectItem"));
export default function Projects() {
    const sliderSettings = {
      arrows: true,
      infinite: true,
      speed: 500, 
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, 
      cssEase: 'linear',
      dots: true,
    };
  
    return (
      <div className='py-10'>
        <SectionTitle id='projects'>My Projects</SectionTitle>
        <Slider {...sliderSettings}>
          {works.map((work, index) => {
            return (
              <div key={index} className='project-slide'>
                <Suspense fallback={<div>Loading...</div>}>
                  <ProjectItem
                    imgUrl={work.imgUrl}
                    title={work.title}
                    tech={work.tech}
                    description={work.description}
                    repolink={work.repolink}
                    weblink={work.weblink}
                  />
                </Suspense>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
  