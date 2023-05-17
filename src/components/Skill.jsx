import React from 'react'
import SkillText from './SkillText'

const SKILLS = [
    { id: 1, name: "Core Skills", desc: "Data Structures & Algorithms, Object-Oriented Programming, Database Management" },
    { id: 2, name: "Programming Languages", desc: "C++, Python, JavaScript" },
    { id: 3, name: "Web Development (Basic)", desc: "React, React Native, Javascript / Node.js, Python / FastApi" },
    { id: 4, name: "Databases", desc: "PostgreSQL, MySQL (basic), MongoDB (basic)," },
    { id: 5, name: "Tools", desc: "Docker, BitBucket, Git, Postman, VS Code" },
]

function Skill() {
    return (
        <div className='px-4 py-7 sm:p-7 text-base sm:text-lg text-gray-900 dark:text-gray-100'>
            {SKILLS.map((item) => (
                <SkillText key={item.id} name={item.name} desc={item.desc} />
            ))}
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />
        </div>
    )
}

export default Skill