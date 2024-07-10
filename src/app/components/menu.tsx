'use client'

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Menu = ({
    menuOpen,
    boxLoading,
    onAnimationEndHandler,
}) => {
    
    const [selectedTab, setSelectedTab] = React.useState('Projects');
    const [cardContent, setCardContent] = React.useState(null);

    useEffect(() => {
      setCardContent(getCards());
    }, [selectedTab]);

    const generateCard = function({
      title,
      description,
      imagePath = null,
      customImageStyle = null,
      linkedInURL = null,
      learnMoreURL = null,
      gitHubURL = null
    }){
      return (
        <SwiperSlide>
          <div className="rounded-2xl bg-[#263828] select-none flex flex-col justify-center items-center h-full">
              <figure className="flex flex-col items-center justify-center w-full h-1/2 rounded-t-2xl bg-[#ffffff] border-green-950 border">
                {imagePath && <Image
                  src={imagePath}
                  width={140}
                  height={140}
                  alt=""
                  className={`select-none p-2 rounded-2xl object-cover ${customImageStyle ? customImageStyle : null}`}
                />}
              </figure>
              <div className="rounded-b-2xl flex flex-col p-4 border-solid border-2 border-[#263828] h-full">
                  <div className="text-2xl font-bold mb-2 text-[#ffffff]">{title}</div>
                  <div className=" text-lg   text-[#ffffff]">{description}</div>
              </div>
              <div className='flex flex-row justify-end items-right content-end w-full pr-8 pb-8 space-x-2'>
                  {linkedInURL && <a
                    className='rounded-xl bg-[#0077B5] p-2 text-[#ffffff]'
                    href={linkedInURL ? linkedInURL : ''}
                  >
                    <FontAwesomeIcon className='mr-2' icon={faLinkedin} />
                    Connect
                  </a> }
                  
                  {learnMoreURL && <a
                    className='rounded-xl bg-white p-2 text-[#263828]'
                    href={learnMoreURL ? learnMoreURL : ''}
                  >
                    Learn More
                  </a>}

                  {gitHubURL && <a
                    className='rounded-xl bg-[#000000] p-2 text-[#ffffff]'
                    href={gitHubURL ? gitHubURL : ''}
                  >
                    <FontAwesomeIcon className='mr-2' icon={faGithub} />
                    GitHub
                  </a> }
              </div>
          </div>
        </SwiperSlide>
      );
    }

    const getCards = function(){
      if (selectedTab === 'Projects') {
        return (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className='h-full w-full'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
          >
            {generateCard({
              title: 'DigitChecker',
              description: 'Card validation utility offering Luhn algorithm verification and industry insights.',
              imagePath: '/digit-checker.png',
              gitHubURL: 'https://github.com/gbburleigh/digit-checker',
              customImageStyle: 'scale-110',
            })}

            {generateCard({
              title: 'Ironwall',
              description: 'Risk and fraud monitoring API with built in consumer reporting',
              imagePath: '/ironwall.png',
              gitHubURL: 'https://github.com/gbburleigh/Ironwall',
              customImageStyle: 'scale-110',
            })}

            {generateCard({
              title: 'Spout',
              description: 'Seeder data as a service via API with type inference and Faker integration. Scrub production data and take the headache out of testing and mocking.',
              imagePath: '/spout.png',
              gitHubURL: 'https://github.com/gbburleigh/',
              customImageStyle: 'scale-110',
            })}

            {generateCard({
              title: 'Useful Scripts',
              description: 'Helpful scripts, templates, and automations I use during development',
              imagePath: '/useful-scripts.png',
              gitHubURL: 'https://github.com/gbburleigh/useful-scripts',
              customImageStyle: 'scale-110',
            })}
          </Swiper>
        );
      }
      else if (selectedTab === 'Work') {
        return (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className='h-full w-full'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
          >
            {generateCard({
              title: 'Stax Payments',
              description: 'Risk and underwriting focused fullstack development. 350+ contributions (commits, PRs merged/reviewed) leading to top 3 performance among all developers.',
              imagePath: '/stax-transparent-large.png',
              linkedInURL: 'https://www.linkedin.com/company/staxpayments/',
              learnMoreURL: 'https://staxpayments.com/'
            })}

            {generateCard({
              title: 'CardX',
              description: 'Serverless fullstack development with a focus on payment processing and incident response. 300+ contributions leading to selection for Stax risk team',
              imagePath: '/cardx-logo.png',
              customImageStyle: 'scale-90 p-2',
              linkedInURL: 'https://www.linkedin.com/company/cardx/',
              learnMoreURL: 'https://www.cardx.com/'
            })}

            {generateCard({
              title: 'AsiaCCS 2024',
              description: 'Co-led academic effort to analyze the MITRE Infosec platform and modern cybersecurity platforms with an emphasis on introducing industry-standard metrics',
              imagePath: '/acm-large-black.png',
              customImageStyle: 'scale-150',
              linkedInURL: 'https://www.linkedin.com/company/association-for-computing-machinery/',
              learnMoreURL: 'https://linktr.ee/theofficialacm'
            })}
          </Swiper>
        );
      }
      else if (selectedTab === 'About') {
        return (
          <div className='h-full w-full flex flex-row justify-between space-x-2'>
            <div className='flex flex-col w-2/3 mr-4'>
              <h2 className='font-extrabold text-4xl pb-4'>Who I Am</h2>
              <p className='text-2xl text-gray-700'>A Chicago Native and Northwestern Alum with 2+ years of fintech and software development experience at the highest level. I'm constantly looking for new ways to level up and grow as a person - professionally, mentally, physically, and everything in between! <br></br> <br></br>I've loved using computers my entire life and this passion has led me to learn about many areas of software development. Outside of work you can catch me cycling along Lake Michigan, training for my next fight, or hitting the gym with my friends. Reach out and get to know me!</p>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className='h-full w-5/12 align-middle'
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: false
              }}
            >
              <SwiperSlide>
                <Image
                  src='/IMG_1741.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='object-top rounded-xl'
                >
                </Image>
              </SwiperSlide>
              
              <SwiperSlide>
                <Image
                  src='/IMG_1760.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='object-top rounded-xl'
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_1947.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='object-top rounded-xl'
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_2017.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='rounded-xl'
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_1761.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='object-top rounded-xl'
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_2046.JPG'
                  alt=""
                  objectFit="cover"
                  className='rounded-xl'
                  fill
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_2112.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                  className='object-top'
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/IMG_3773.JPG'
                  alt=""
                  objectFit="cover"
                  fill
                >
                </Image>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }
      else if (selectedTab === 'Resume') {
        return (
        <div className='flex flex-col justify-center items-center align-middle h-full w-full'>
          <div className='flex flex-row items-center content-center align-middle space-x-40'>
            <p className='w-64 font-extrabold text-2xl'>Interested in working further? Take a copy of my resume for a summary of my work and professional endeavours.</p>
            <div className='w-0.5 h-[95%] bg-gray-400 ml-2 mt-2'></div>
            <a href='https://raw.githubusercontent.com/gbburleigh/Resume/063795eea76a0df6e10d528f2f5564493b05919c/resume_updated.pdf' className='text-center'>
              <Image
                src='/resume.png'
                width={300}
                height={300}
                alt=""
                className='opacity-60'
              >
              </Image>
              <p className='font-extralight'>Graham Burleigh Resume 2024</p>
              <p className='font-extralight'>resume_updated.pdf (105 kb)</p>
            </a>
          </div>
        </div>
        )
      }
      else if (selectedTab === 'Life') {
        return (
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            className='h-full w-full'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: false
            }}
          >

          </Swiper>
        )
      }
      else {
        return <div className='h-full w-full'></div>;
      }
    }

    let animationState = '';
    if (boxLoading && menuOpen) {
      animationState = 'animate-expand-div';
    }
    else if (boxLoading && !menuOpen) {
      animationState = 'animate-contract-div';
    }
    
    const getBoxContent = function(){
      if (boxLoading) {
          return null;
      }
      return (
        <div 
            className='w-full h-full flex flex-row items-left justify-between align-middle'
        >
          <div className='flex max-w-24 max-h-96 h-full flex-col rounded-sm space-y-4 pb-4 m-2 justify-center'>
            <div 
                onClick={e => setSelectedTab('About')}
                className={`font-bold w-full p-2 select-none rounded-lg ${selectedTab === 'About' ? 'bg-[#486648] drop-shadow-lg text-white animate-fade-in' : 'text-gray-700 animate-fade-out'}`}
            >
                About
            </div>
            
            <div
                onClick={e => setSelectedTab('Projects')}
                className={`font-bold w-full p-2 select-none rounded-lg ${selectedTab === 'Projects' ? 'bg-[#486648] drop-shadow-lg text-white animate-fade-in' : 'text-gray-700 animate-fade-out'}`}
            >
                Projects
            </div>

            <div 
                onClick={e => setSelectedTab('Work')}
                className={`font-bold w-full p-2 select-none rounded-lg ${selectedTab === 'Work' ? 'bg-[#486648] drop-shadow-lg text-white animate-fade-in' : 'text-gray-700 animate-fade-out'}`}
            >
                Work
            </div>

            <div 
                onClick={e => setSelectedTab('Resume')}
                className={`font-bold w-full p-2 select-none rounded-lg ${selectedTab === 'Resume' ? 'bg-[#486648] drop-shadow-lg text-white animate-fade-in' : 'text-gray-700 animate-fade-out'}`}
            >
                Resume
            </div>

            <div 
                onClick={e => setSelectedTab('Life')}
                className={`font-bold w-full p-2 select-none rounded-lg ${selectedTab === 'Life' ? 'bg-[#486648] drop-shadow-lg text-white animate-fade-in' : 'text-gray-700 animate-fade-out'}`}
            >
                Life
            </div>
          </div>
          <div className='w-[.1%] h-[95%] bg-gray-400 ml-2 mt-2'></div>
          <div className='flex w-[90%] h-full flex-col justify-center content-center items-center rounded-sm pb-4 m-2'>
            {cardContent}
          </div>
        </div>
      );
    }

    return (
        <div 
          hidden={!boxLoading && !menuOpen}
          onAnimationEnd={onAnimationEndHandler}
          className={`relative bg-green-50 ${animationState} w-full h-full border-2 border-gray-400 m-8 rounded-md p-2`}
        >
            {getBoxContent()}
        </div>
    );
}

export default Menu;