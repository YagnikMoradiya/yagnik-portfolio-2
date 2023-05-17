import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import SkillBox from "./SkillBox"

function Experience() {
    return (
        <div className='px-4 py-7 sm:p-7 text-base sm:text-lg'>
            <div className="flex">
                <div className="h-28 w-28 py-2">
                    <img src="crest.webp" alt="Crest Logo" />
                </div>
                <div className="px-2">
                    {/* Crest */}
                    {/* <div> */}
                    <div className="text-gray-900 dark:text-gray-100">
                        <span>
                            <span className="font-semibold">SDE Intern </span>
                        </span>
                        -{" "}
                        <span>
                            <a href="" className="highlights font-normal">Crest Data Systems</a>
                        </span>
                    </div>

                    <div className='text-sm sm:text-base flex items-center space-x-2 text-gray-900 dark:text-gray-100'>
                        <FaCalendarAlt />
                        <p > Dec 2022 - Present </p>
                        <FaMapMarkerAlt />
                        <p> Ahmedabad </p>
                    </div>

                    <div>
                        <SkillBox name="Python" />
                        <SkillBox name="Splunk" />
                        <SkillBox name="FastApi" />
                        <SkillBox name="PostgreSQL" />
                        <SkillBox name="Docker" />
                    </div>

                    <div className='p-2 sm:p-3'>
                        <ul className='px-4 text-gray-900 dark:text-gray-50 text-sm sm:text-base list-disc'>
                            <li>Developed an internal tool,{' '}
                                <span className='font-bold'>Universal Rest Client (URC),</span> that automated the generation of recurring code for platform integrations, resulting in a significant 70% reduction in developer efforts.
                            </li>
                            <li>Collaborated with a cross-functional team to design and implement URC, ensuring compatibility and efficiency across various platforms.</li>
                            <li>Utilized FastAPI, a modern Python web framework, to develop a scalable and high-performance backend application for a Book Store project.</li>
                            <li>Containerized the Book Store backend application using Docker, facilitating easy deployment and management across different environments.</li>
                        </ul>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />

            <div className="flex">
                <div className="h-28 w-28 py-2">
                    <img className="bg-blue-500 p-2" src="7seasol.svg" alt="Crest Logo" />
                </div>
                <div className="px-2">
                    {/* 7Seasol */}
                    <div>
                        <div className="text-gray-900 dark:text-gray-100">
                            <span>
                                <span className="font-semibold">SDE Intern </span>
                            </span>
                            -{" "}
                            <span>
                                <a href="http://7seasol.com/" className="highlights font-normal">7Seasol</a>
                            </span>
                        </div>

                        <div className='text-sm sm:text-base flex items-center space-x-2 text-gray-900 dark:text-gray-100'>
                            <FaCalendarAlt />
                            <p> May 2022 - June 2022 (2 Months) </p>
                            <FaMapMarkerAlt />
                            <p> Surat </p>
                        </div>

                        <div>
                            <SkillBox name="React Native" />
                            <SkillBox name="WatermelonDB" />
                            <SkillBox name="Node.js" />
                            <SkillBox name="Firebase" />
                        </div>

                        <div className='p-2 sm:p-3'>
                            <ul className='px-4 text-gray-900 dark:text-gray-50 text-sm sm:text-base list-disc'>
                                <li>Developed and implemented a CalculatorVault application using React Native framework and Integrated React
                                    Native components to create a user-friendly and intuitive interface for the CalculatorVault application.</li>
                                <li>Utilized WatermelonDB for efficient storage and retrieval of data on local devices.</li>
                                <li>Designed and implemented a backup mechanism for WatermelonDB data on the Cloud using Node.js and
                                    Firebase.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />

        </div>
    )
}

export default Experience