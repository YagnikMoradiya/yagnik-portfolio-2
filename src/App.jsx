import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Button from './components/Button';
import { useNavigate } from 'react-router';

export default function App() {
  const [text, count] = useTypewriter({
    words: ["Thinks with both brains. 🧠", "Laugh in serious situations. 😀", "Guy-who-loves-Coffee.tsx ☕", "<ButLovesToCodeMore  />"],
    loop: true,
    delaySpeed: 2000
  })
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="h-screen flex flex-col justify-center items-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Hi 👋, My name is{' '}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-pink-600 sm:text-6xl">
            Yagnik Moradiya
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <p onClick={() => navigate('/main')} className="rounded-xl px-2 py-1.5 sm:px-3.5 sm:py-2.5 ring-1 ring-gray-900/10 hover:ring-gray-700 text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
