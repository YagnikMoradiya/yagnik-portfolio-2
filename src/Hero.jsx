import { useState } from 'react'
import About from './components/About'
import Header from './components/Header'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const navigation = [
  'About',
  'Work Experience',
  'Skills',
  'Projects',
  'Education',
  'Contact',
]

export default function Hero() {
  const [selected, setSelected] = useState("About")
  return (
    // max-h-screen overflow-hidden
    <div className="bg-white dark:bg-black mx-auto max-w-screen-2xl min-h-screen flex flex-col">
      <Header navigation={navigation} selected={selected} setSelected={setSelected} />
      {/* max-h-screen overflow-scroll */}
      <div className='sm:mx-auto max-w-6xl py-16 sm:py-18 lg:py-20 flex-1'>
        {selected == 'About' && <About handleExperience={() => setSelected("Work Experience")} />}
        {selected == 'Work Experience' && <Experience />}
        {selected == 'Skills' && <Skill />}
        {selected == 'Projects' && <Project />}
        {selected == 'Education' && <Education />}
        {selected == 'Contact' && <Contact />}
      </div>

      <div className='max-w-screen-2xl'>
        <Footer />
      </div>
    </div>
  )
}
