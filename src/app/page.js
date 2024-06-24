'use client'

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <main className="flex min-h-screen min-w-screen bg-slate-50 p-24">
      <div className="w-full flex flex-col items-center justify-between">
        {/* Top Row */}
        <div className="w-full flex flex-row items-left justify-between align-middle">

          {/* Left Component - Name and Title */}
          <div className="flex flex-col items-left align-text-bottom">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Graham Burleigh</h1>
            <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">Software Development</h2>
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-500 md:text-xl lg:text-2xl dark:text-white">Payments, Security, DevOps, Exploration</h3>
            <h4 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-500 md:text-xl lg:text-2xl dark:text-white">Chicago, IL</h4>
          </div>

          {/* Right Component - Profile Picture */}
          <Image
            src='/headshot.png'
            width={225}
            height={225}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>

        {
          menuOpen ? 
            <div className="transition ease-in-out w-full h-full border-2 border-slate-400 m-8"></div> : 
            <div className="transition ease-in-out text-6xl align-middle animate-pulse text-gray-400">Hi!</div>
        }

        {/* Bottom Row */}
          
        <div className="w-full flex flex-row justify-between text-5xl text-gray-600 md:text-4xl lg:text-4xl dark:text-white">
          {/* Left Component - Menu To Be Finished */}
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {setMenuOpen(!menuOpen)}}
          />

          {/* Right Component - Social Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/gbburleigh"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/gbburleigh/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:gbburleigh6@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>

        </div>
      </div>
    </main>
  );
}
