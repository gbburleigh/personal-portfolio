'use client'

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Particle from "./components/background";
import React from "react";

import Menu from "./components/menu";

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [boxLoading, setBoxLoading] = React.useState(false);  

  return (
    <main className="flex min-h-screen min-w-screen bg-green-50 p-12 z-1">

      <Particle />

      <div className="w-full flex flex-col items-center justify-between">

        <div className="w-full flex flex-row items-left justify-between align-middle">

          <div className="relative p-4 rounded-xl flex flex-col items-left align-text-bottom bg-green-50">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-green-900 md:text-5xl lg:text-6xl dark:text-white">Graham Burleigh</h1>
            <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-green-800 md:text-3xl lg:text-4xl dark:text-white">Software Development</h2>
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-green-800 md:text-xl lg:text-2xl dark:text-white">Payments, Security, DevOps, Exploration</h3>
            <h4 className="mb-4 text-lg font-bold leading-none tracking-tight text-green-800 md:text-xl lg:text-2xl dark:text-white">Chicago, IL</h4>
          </div>

          <Image
            src='/headshot.png'
            width={250}
            height={250}
            alt="Picture of the author"
            className="relative select-none border-green-900 border-solid border-2"
          />
        </div>

        <Menu 
          menuOpen={menuOpen}
          boxLoading={boxLoading}
          onAnimationEndHandler={(e) => {
            setBoxLoading(false);
          }}
        />
        
        <div className="w-full flex flex-row justify-between text-5xl text-green-900 md:text-4xl lg:text-4xl dark:text-white drop-shadow-xl">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setBoxLoading(true);
              setMenuOpen(!menuOpen);
            }}
          />

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
