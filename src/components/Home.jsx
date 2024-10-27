import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex-[3.25] transition-all duration-500 dark:bg-[#202124] dark:text-[#EBEAE6] sm:border-r dark:border-gray-700">
      <main className="flex flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            voluptatem. In excepturi animi inventore vero soluta officia ipsa,
            voluptatibus illum, sint placeat alias error temporibus. Ea,
            sapiente! Sequi iusto corporis necessitatibus dolores cumque, quae
            sapiente possimus, sed, similique quos eos? Iure non dolorum
            cupiditate unde porro accusantium, alias doloremque vel neque id
            placeat nostrum. Reprehenderit facilis adipisci facere nostrum
            architecto rem, impedit accusamus odit dolorem quasi. Itaque sint
            nihil nisi? Consequatur nisi, perspiciatis ad laboriosam blanditiis
            nobis, commodi doloremque iure rerum magnam delectus ratione?
            Tenetur maxime neque numquam minus voluptatum, quisquam sequi ea
            necessitatibus aspernatur fugit minima eum ad? Magni beatae,
            adipisci numquam soluta similique molestias? Minima, repellat!
            Corrupti reiciendis asperiores eveniet eligendi tempora numquam
            quaerat optio, minima distinctio. At commodi placeat facere ipsam
            quod. Tempora pariatur ut vero ipsum voluptatem quaerat laudantium
            exercitationem nostrum, assumenda harum dolore praesentium provident
            autem impedit, quia perferendis hic quibusdam nisi maxime nesciunt
            rerum.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem sequi consequatur ducimus, provident dicta dolorem
                  reprehenderit laborum dignissimos recusandae impedit!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi debitis in rerum assumenda unde nam harum et
                  asperiores aspernatur magnam?
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
                  <span className="text-lg font-semibold">Project 1</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 pr-4 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Project 2</span>
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
                  <span className="text-lg font-semibold">Project 3</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi debitis in rerum assumenda unde nam harum et
                    asperiores aspernatur magnam?
                  </p>
                </li>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 pr-4 py-[25px]">
                <li className="relative flex flex-col">
                  <span className="text-lg font-semibold">Project 4</span>
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
