"use client";
import Image from "next/image";
import React from "react";
import { FaFile, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

// Define the types
type Props = {
  courses: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
  };
};

const CourseCard = ({ courses }: Props) => {
  return (
    <Tilt>
      <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
        <div>
          <Image
            src={courses.image}
            alt={courses.title}
            width={400}
            height={400}
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="p-4">
          <h1 className="ml-auto relative z-[10] h-10 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-4rem] rounded-full bg-rose-700 text-white">
            ${courses.price}
          </h1>
          <div className="flex items-center mt-6 space-x-4 ">
            <span className="text-lg text-black text-opacity-70 font-bold">
              {courses.category}
            </span>
            <span className="text-base text-gray-600">{courses.author}</span>
          </div>

          <h1 className="text-xl text-black font-bold mt-2">{courses.title}</h1>
          <div className="flex mt-2 items-center space-x-2 ">
            <div className="flex items-center">
              <FaStar className="w-4 h-4 text-yellow-600" />
              <FaStar className="w-4 h-4 text-yellow-600" />
              <FaStar className="w-4 h-4 text-yellow-600" />
              <FaStar className="w-4 h-4 text-yellow-600" />
              <FaStar className="w-4 h-4 text-yellow-600" />
              <FaStar className="w-4 h-4 text-yellow-600" />
            </div>
            <span className="text-base text-orange-800 font-semibold">
              ({courses.reviewNumber}Reviews)
            </span>
          </div>

          <div className="mt-6 mb-6 w-full h-[2px] bg-green-500 opacity-15">
          </div>
          <div className="flex mb-8 items-center justify-between">
            <div className="flex items-center space-x-2">
                <FaFile className="w-4 h-4 text-orange-600"/>
                <p className="text-base font-semibold text-green-800">{courses.lessons} Lesson</p>
            </div>
            <div className="flex items-center space-x-2">
                <FaUserGroup className="w-4 h-4 text-orange-600"/>
                <p className="text-base font-semibold text-green-800">{courses.students} Students</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CourseCard;
