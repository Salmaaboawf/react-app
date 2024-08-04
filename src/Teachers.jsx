import React, { useState } from "react";
import "flowbite";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
function Teachers() {
  //array start 
  let [teachers, setTeachers] = useState([
    {
      name: "Teacher 1",
      src: "/images/5-min-1.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 2",
      src: "/images/2-min.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 3",
      src: "/images/4-min.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 4",
      src: "/images/1-min.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 5",
      src: "/images/2-min.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 6",
      src: "/images/6-min-1.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
    {
      name: "Teacher 7",
      src: "/images/5-min-1.jpg",
      des: "Mel utamur nostrud et, duo illud oratio suavitate, qui cu elitr et sanctus. Ei convenire suavitate eos. Ex pro minimum recusabo.",
      sub: "Math teach",
    },
  ]);
//aray end
  return (

    <div className="px-0">
      {/* header  start*/}
      <div className="bg-gray-300 py-8 my-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
        <h1>Teachers</h1>
      </div>
       {/* header  end*/}
       
      <div className="flex flex-wrap justify-between">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="max-w-xl my-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex"
          >
            {/* image */}
            <a href="#">
              <img className="rounded-t-lg" src={teacher.src} alt="" />
            </a>
            {/* name */}
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {teacher.name}
                </h5>
              </a>
              {/* contact */}
              <ul class=" flex flex-wrap justify-center">
                <li className="p-3  m-2 rounded-full border border-gray-300">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    <FiFacebook />
                  </a>
                </li>
                <li className="p-3 m-2 rounded-full border border-gray-300">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    <SlSocialLinkedin />
                  </a>
                </li>{" "}
                <li className="p-3 m-2 rounded-full border border-gray-300">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    <LuTwitter />
                  </a>
                </li>{" "}
              </ul>
              {/* description */}
              <p className="mb-3 py-4 font-normal text-gray-700 dark:text-gray-400">
                {teacher.des}
              </p>
              {/* see more */}
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  MORE ABOUT ME
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
