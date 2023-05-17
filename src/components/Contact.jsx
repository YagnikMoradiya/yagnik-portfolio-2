import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function ContactItem({ children, name, link, linkLabel }) {
    return <div className="my-4 text-gray-900 dark:text-gray-50">
        <div className="flex items-center space-x-3">
            <span className="">{children}</span>
            <p className="font-bold">{name}</p>
        </div>
        <div>
            <a href={link} target="_blank" className='highlights text-base'>{linkLabel}</a>
        </div>
    </div>
}

function Contact() {
    return (
        <div className='px-4 py-7 sm:p-7 text-base sm:text-lg text-gray-900'>
            <ContactItem children={<FaEnvelope />} name="Email" link="mailto:moradiyayagnik7@gmail.com" linkLabel="moradiyayagnik7@gmail.com" />
            <ContactItem children={<FaGithub />} name="Github" link="https://github.com/YagnikMoradiya" linkLabel="https://github.com/YagnikMoradiya" />
            <ContactItem children={<FaLinkedinIn />} name="Linkedin" link="https://www.linkedin.com/in/yagnik-moradiya-2495261b2" linkLabel="https://www.linkedin.com/in/yagnik-moradiya-2495261b2" />
            <ContactItem children={<FaInstagram />} name="Instagram" link="https://www.instagram.com/moradiyayagnik/" linkLabel="https://www.instagram.com/moradiyayagnik/" />
            <ContactItem children={<FaTwitter />} name="Twitter" link="https://mobile.twitter.com/Yagnik_2010" linkLabel="https://mobile.twitter.com/Yagnik_2010" />
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />
        </div>
    )
}

export default Contact