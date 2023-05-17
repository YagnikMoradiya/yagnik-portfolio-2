import React from 'react'

function SkillText({ name, desc }) {
    return (
        <div className='p-3 '>
            <p className='text-base text-gray-900 dark:text-gray-50 font-bold sm:text-lg'>{name}</p>
            <p className='text-sm sm:text-base'>{desc}</p>
        </div>
    )
}

export default SkillText