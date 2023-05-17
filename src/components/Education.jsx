import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

function Education() {
    return (
        <div className='px-4 py-7 sm:p-7 text-base sm:text-lg text-gray-900 dark:text-gray-100'>
            <div>
                <div>
                    <a href="https://www.charusat.ac.in/" target='_blank' className="highlights">Charotar University of Science and Technology</a>
                </div>
                <div className='text-sm sm:text-base flex items-center space-x-3'>
                    <FaCalendarAlt />
                    <p> July 2019 - April 2023 </p>
                    <FaMapMarkerAlt />
                    <p> Changa </p>
                </div>
                <div className='pt-2'>
                    <span className='font-bold'>B.Tech - Information Technology</span>
                </div>
                <div>CPI : 9.57 / 10</div>
                <div className='pt-1'>Undergraduate Courses include Design and Analysis of Algorithms, Advanced Algorithms,
                    Software Engineering, Object-Oriented Software Engineering, Operating Systems,
                    Database Management Systems, UNIX, Basics of Computer Architecture.</div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[1px]' />

            <div>
                <div>
                    <a className="highlights">Jagadguru Shri Vallabhacharya Vidhyadham</a>
                </div>
                <div className='text-sm sm:text-base flex items-center space-x-3'>
                    <FaCalendarAlt />
                    <p> June 2017 - March 2019 </p>
                    <FaMapMarkerAlt />
                    <p> Surat </p>
                </div>
                <div className='pt-2'>
                    <span className='font-bold'>12th (Science) - GSHEB </span>
                    | March 2019
                </div>
                <div>Percentage : 88 % <br /> (Physics, Chemistry, Maths) </div>
                <div className='pt-2'>
                    <span className='font-bold'>10th (SSC) - GSHEB </span>
                    | March 2017
                </div>
                <div> Percentage : 87 %  </div>
            </div>
            <hr className='opacity-25 border-0 my-4 bg-gray-700 dark:bg-gray-100 h-[1px]' />
        </div>
    )
}

export default Education