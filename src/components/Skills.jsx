import React from 'react'
import SkillBars from "../SkillBars";
import ProfessionalSkills from "./ProfessionalSkills";
const Skills = () => {
  return (
    <div className='bg-[rgb(12,29,44)] '>
        <h1>Skills</h1>
        <div className='grid grid-cols-2 '>           
        <SkillBars></SkillBars>
              <ProfessionalSkills></ProfessionalSkills>
              </div>
    </div>
  )
}

export default Skills