import React from 'react';
import image from '/public/image.jpg';
import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMoon,
  BiSun,
} from 'react-icons/bi';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-[0.75] relative pt-5 pb-5 pl-8 pr-8 transition-all duration-500 dark:bg-[#202124] dark:text-[#EBEAE6] sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="" className="w-32 rounded-full" />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              I'm <span className="font-semibold">Gaurav</span>
            </h1>
            <h3 className="text-xl font-light">Software Engineer</h3>
          </div>
          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>

          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-10 top-10">
            <BiEnvelope className="text-2xl" />
          </a>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-4 dark:border-gray-700">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Delhi, India</span>
            </li>
            <a
              href="mailto:gauravkavat@gmail.com"
              className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>gauravkavat@gmail.com</span>
            </a>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-4 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Socials</h1>
          <div className="flex flex-wrap gap-x-14">
            <span>
              <a
                href="https://github.com/GauravKavat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <BiLogoGithub className="text-xl" />
                <span>Github</span>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/gauravkavat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <BiLogoLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-4 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Education</h1>
          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Software Engineering
              </span>
              <span className="font-light">Delhi Technological University</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                2022 - 2026
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-4 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Skills</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-[#202124] text-white pl-2 pr-2 pt-1 pb-1 text-center dark:bg-[#EBEAE6] dark:text-black">
                C/C++
              </span>
              <span className="rounded-xl bg-[#202124] text-white pl-2 pr-2 pt-1 pb-1 text-center dark:bg-[#EBEAE6] dark:text-black">
                Kotlin
              </span>
              <span className="rounded-xl bg-[#202124] text-white pl-2 pr-2 pt-1 pb-1 text-center dark:bg-[#EBEAE6] dark:text-black">
                Python
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-[#202124] text-white pl-2 pr-2 pt-1 pb-1 text-center dark:bg-[#EBEAE6] dark:text-black">
                React
              </span>
              <span className="rounded-xl bg-[#202124] text-white pl-2 pr-2 pt-1 pb-1 text-center dark:bg-[#EBEAE6] dark:text-black">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
