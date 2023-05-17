import { FaGithub } from "react-icons/fa"
import SkillBox from "./SkillBox"

function Project() {
    return (
        <div className='px-4 py-7 sm:p-7 text-base sm:text-lg'>
            {/* TripAssistant */}
            <div className="px-2">
                <div>
                    <div>
                        <span>
                            <span className="font-bold text-pink-500">TripAssistant </span>
                        </span>
                        -{" "}
                        <span className="text-xs sm:text-sm">
                            August 2020
                        </span>
                    </div>
                    <div>
                        <SkillBox name="React Native" />
                        <SkillBox name="Expo" />
                        <SkillBox name="Firebase" />
                        <SkillBox name="React.js" />
                    </div>

                    <div className='p-2 sm:p-3'>
                        <ul className='px-4 text-gray-900 dark:text-gray-50 text-sm sm:text-base list-disc'>
                            <li>Developed a mobile and web application using <span className='font-bold'>React Native (Expo) and React.js,</span> leveraging their powerful features to create a seamless user experience for trip management with friends.</li>
                            <li>Leveraged Firebase, a robust backend-as-a-service platform, to handle various functionalities, including location sharing, group expense management, and in-app messaging. This allowed users to easily coordinate and communicate during their trips.</li>
                            <li>Implemented key features such as location sharing to track and display the real-time whereabouts of friends, group expense management to split costs and keep track of shared expenses, and in-app messaging to facilitate seamless communication within the application, enhancing the overall trip management experience.</li>
                            <li><a href="https://github.com/YagnikMoradiya/TripAssistant" target="_blank" className="highlights flex items-center space-x-1"><span>Source Code</span> <FaGithub className="inline" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />
            <div className="px-2">
                <div>
                    <div>
                        <span>
                            <span className="font-bold text-pink-500">PMS (Placement Management System) </span>
                        </span>
                        -{" "}
                        <span className="text-xs sm:text-sm">
                            January 2021
                        </span>
                    </div>
                    <div>
                        <SkillBox name="React.js" />
                        <SkillBox name="Node.js" />
                        <SkillBox name="PostgreSQL" />
                        <SkillBox name="Firebase" />
                    </div>

                    <div className='p-2 sm:p-3'>
                        <ul className='px-4 text-gray-900 dark:text-gray-50 text-sm sm:text-base list-disc'>
                            <li>Created a highly efficient web application that streamlined the management of placement data for a university's Training and Placement (TNP) cell. The application offered a comprehensive set of features designed to optimize the entire placement process.</li>
                            <li>Implemented advanced functionality for data management, allowing TNP personnel to easily track and update student profiles, maintain company information, and manage placement schedules. This streamlined approach significantly reduced the workload of TNP personnel by 70%.</li>
                            <li>Incorporated real-time collaboration and communication features, such as in-app messaging and notifications, to facilitate seamless coordination between TNP personnel, students, and recruiters. This improved efficiency and enabled timely updates regarding interview schedules, placement offers, and other important announcements.</li>
                            <li>Overall, the web application transformed the placement management process for the university's TNP cell, enhancing productivity, accuracy, and collaboration while providing a user-friendly interface for all stakeholders involved.</li>
                            <li><a href="https://github.com/YagnikMoradiya/charusat_pms" target="_blank" className="highlights flex items-center space-x-1"><span>Source Code</span> <FaGithub className="inline" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />
            <div className="px-2">
                <div>
                    <div>
                        <span>
                            <span className="font-bold text-pink-500">E-Voting System </span>
                        </span>
                        -{" "}
                        <span className="text-xs sm:text-sm">
                            February 2022
                        </span>
                    </div>
                    <div>
                        <SkillBox name="React Native" />
                        <SkillBox name="Expo" />
                        <SkillBox name="Firebase" />
                        <SkillBox name="React.js" />
                    </div>

                    <div className='p-2 sm:p-3'>
                        <ul className='px-4 text-gray-900 dark:text-gray-50 text-sm sm:text-base list-disc'>
                            <li>Spearheaded the development of an e-voting web application, leveraging cutting-edge technologies to ensure secure storage of votes on the blockchain. By utilizing the immutability and transparency of blockchain technology, the application provided a tamper-proof and auditable voting system.</li>
                            <li>Led a team of developers throughout the project, coordinating efforts and ensuring effective collaboration. By fostering a cohesive working environment and encouraging innovation, the team successfully delivered the e-voting application, showcasing strong leadership skills.</li>
                            <li>Demonstrated the application's capabilities and excellence by earning <span className="font-bold">second place in a competitive hackathon.</span> This recognition highlights the effectiveness of the developed solution, its innovative use of technology, and the team's ability to deliver impactful results within a competitive environment.</li>
                            <li><a href="https://github.com/YagnikMoradiya/E-voting-backend" target="_blank" className="highlights flex items-center space-x-1"><span>Source Code</span> <FaGithub className="inline" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[2px]' />
        </div>
    )
}

export default Project