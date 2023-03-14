import React from 'react'

function Button({name, onClick}) {
  return (
    <div onClick={onClick} className="inline-block rounded-xl px-2 py-1.5 m-3.5 sm:px-3.5 sm:py-2.5 ring-2 ring-gray-900/10 hover:ring-gray-700 text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer">
        {name} <span aria-hidden="true">→</span>
    </div>
  )
}

export default Button