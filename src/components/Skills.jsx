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


