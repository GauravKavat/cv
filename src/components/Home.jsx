import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3.25] transition-all duration-500 dark:bg-[#202124] dark:text-[#EBEAE6] sm:border-r dark:border-gray-700">
      <main className="flex flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base text-justify">
            I am an aspiring software engineer who excels in startup environments, tackling challenging problems and driving rapid growth. I take full ownership of my work, ensuring data persistence and scalable workflows through independent solutions. With a self-motivated, detail-oriented mindset and a commitment to continuous learning, I have quickly mastered technologies like React, Next.js, Kotlin, Python, and Unreal Engine.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">Job Title</span>
                <span className="font-light">Worked For</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Duration of Work
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently looking for work — hope you're the first to realize I’m the perfect fit!
                </p>
              </li>
            </ul>

            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">Job Title</span>
                <span className="font-light">Worked For</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Duration of Work
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently looking for work — hope you're the first to realize I’m the perfect fit!
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <div className="flex flex-col items-start justify-start gap-5 border-b pr-4 dark:border-gray-700 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Customer Churn Prediction Model</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 pr-4 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Notion Clone</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>
            </ul>

            <ul>
              <div className="flex flex-col items-start justify-start gap-5 border-b pr-4 dark:border-gray-700 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Basic List taking application</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 pr-4 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Basic Unit conversion application</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>
            </ul>

            <ul>
              <div className="flex flex-col items-start justify-start gap-5 border-b pr-4 dark:border-gray-700 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Project 5</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 pr-4 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Project 6</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
