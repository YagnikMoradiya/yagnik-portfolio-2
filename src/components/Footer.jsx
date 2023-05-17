import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='flex items-center justify-between p-4 lg:px-6 '>
            <div>
                ©
                <span> {new Date().getFullYear()}</span>
                - Yagnik Moradiya
            </div>
            <div className='flex items-center space-x-4 text-base sm:text-2xl'>
                <a target='_blank' href="https://www.instagram.com/moradiyayagnik/">
                    <FaInstagram />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/yagnik-moradiya-2495261b2">
                    <FaLinkedinIn />
                </a>
                <a target='_blank' href="https://mobile.twitter.com/Yagnik_2010">
                    <FaTwitter />
                </a>
            </div>
        </footer>
    )
}

export default Footer