import { useState } from 'react'
import About from './components/About'
import Header from './components/Header'

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Work Experience', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Achivements', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Hero() {
    const [selected, setSelected] = useState("About")
  return (
    <div className="bg-white mx-auto max-w-screen-2xl">
      <Header navigation={navigation} selected={selected} setSelected={setSelected} />

      <div className='mx-auto max-w-6xl py-16 sm:py-18 lg:py-20'>
        <About />
      </div>
    </div>
  )
}
