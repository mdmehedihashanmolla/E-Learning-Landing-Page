import React from "react";

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
        Best online platform for education.
      </h1>
      <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolorum
        deserunt debitis praesentium unde minima inventore provident mollitia
        ipsam laboriosam.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <button className="button__cls bg-green-700 hover:bg-green-900">
          Get Started
        </button>
        <button className="button__cls bg-yellow-700 hover:bg-yellow-900">
          Learn More
        </button>
      </div>
      {/* Stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            260+
          </p>
          <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">Tutors</p>
        </div>
        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            2260+
          </p>
          <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">Students</p>
        </div>

        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            60+
          </p>
          <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">Courses</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
