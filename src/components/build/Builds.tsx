import { mockProjects } from "@/lib/mobileMenu";
import React, { useEffect, useState } from "react";

export default function Builds() {

  return (
    <div className="mt-4 flex flex-col gap-8">
      {mockProjects.map((project) => (
        <div className="group box flex gap-10" key={project.id}>
          <div className="flex flex-col gap-4 p-4 sm:p-8 md:p-10 md:w-1/2 md:py-10">
            {/* <Icon name={project.icon} className="text-6xl shadow-inner" /> */}
            <h2 className="font-extrabold text-black dark:text-white text-2xl md:text-3xl ">
              {project.title}
            </h2>
            <p className="mt-2 leading-6 text-sm md:text-base">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-auto ">
              <div className="flex items-center gap-2 text-black dark:text-white font-medium text-sm">
                <p className="group-hover:border-b group-hover:border-red-600 group-hover:transition-transform">
                  Visit App
                </p>
                {/* <a href={project.link}>
                  <Icon
                    name="icons/Arrow Right-Fill"
                    className="text-base md:text-lg transition-transform duration-200 ease-in-out hover:translate-x-1"
                  />
                </a> */}
              </div>
              <div className="flex items-center gap-2 text-black dark:text-white font-medium text-sm">
                <p>Github</p>
                {/* <a href={project.link} className="">
                <Icon
                  id="iconId"
                  name="icons/Arrow Right"
                  classNameName="text-base md:text-lg dark:text-white transition-transform duration-200 ease-in-out hover:translate-x-1 "
                />
              </a> */}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:items-start ml-auto md:w-1/2 h-[400px] overflow-hidden">
            <img
              src={project.image}
              alt=""
              className=" transition-transform duration-300 ease-in-out hover:-rotate-6 hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
