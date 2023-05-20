import React from 'react'
import Button from './Button'

function About({ handleExperience }) {
    return (
        <div className='px-4 py-7 sm:p-7'>
            <h1 className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                HI 👋, I'm <span className='font-bold'>Yagnik Moradiya.</span>
            </h1>
            <div className="text-xl tracking-tight text-pink-600 sm:text-2xl leading-loose">
                Software Engineer | Javascript
            </div>
            <div className='px-4 sm:p-7'>
                <ul className='px-6 text-gray-900 text-lg sm:text-xl list-disc'>
                    <li>I am working at{' '}
                        <a href="https://www.crestdatasys.com/" target="_blank" className="highlights">Crest Data Systems</a>
                        {' '}as a <span className='font-bold'>Software Engineer.</span>
                    </li>
                    <li>I have pursued B.Tech in Information Technology from{' '}
                        <a href="" target="_blank" className="highlights">CHARUSAT University</a>{' '}
                        (2019-2023).
                    </li>
                    <li>I have a good grasp of Data-structure & Algorithms, C++, Python and Javascript.</li>
                    <li>Also, I have a good knowledge of backend development, created projects based on the MERN Stack and React Native.</li>
                    <li>In my free time, I enjoy ❤️ problem-solving (DSA), listening to music 🎵 and sometimes read a book 📕.</li>
                    <li>I keep things simple and 💻 technology attracts me a lot.</li>
                </ul>
                <div className='md:flex md:space-x-4 my-3 '>
                    <a href="./Yagnik-Resume.pdf" download target='_blank'>
                        <Button name="Resume" />
                    </a>
                    <Button name="Experience" onClick={handleExperience} />
                </div>

            </div>
        </div>
    )
}

export default About