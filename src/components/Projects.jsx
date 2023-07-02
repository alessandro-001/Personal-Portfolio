import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectItem from './ProjectItem'
import works from '../data/projects'


export default function Projects() {
  return (
    <div className='py-10'>
        <SectionTitle id='projects'>My Projects</SectionTitle>
        <div>
            {works.map(work => {
                return(
                    <ProjectItem 
                        key={work.title}
                        imgUrl={work.imgUrl}
                        title={work.title}
                        tech={work.tech}
                        description={work.description}
                        repolink={work.repolink}
                        weblink={work.weblink}
                    ></ProjectItem>
                )
            })}
        </div>
    </div>
  )
}
