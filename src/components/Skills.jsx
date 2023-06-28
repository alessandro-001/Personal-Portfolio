import React from 'react';
import SectionTitle from './SectionTitle';
import SkillItem from './SkillItem';
import SkillsList from '../data/skillsList';

function Skills() {
  return (
    <div className='py-10'>
      <SectionTitle>My Skills</SectionTitle>
      <div className='py-10'>
        {SkillsList.map(skill => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;


//grid view: <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//flat list view: <div className='py-10'>