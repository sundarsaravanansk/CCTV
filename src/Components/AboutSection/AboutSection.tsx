"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {

    // useGSAP(()=>{
     
    //     gsap.to('.panel', {
    //         scrollTrigger: {
    //           trigger: '.panel',
    //           start: 'top top',
    //           end: '+=100%',
    //           pin: true,
    //           scrub: true,
              
    //         },
    //       });

   

    // })
    return (
        <>
        <div className=' md:pt-14 bg-[#eeecee] panel sq'>
            <div className='px-1'>
                <div>
                    <div className='text-center uppercase'>
                        <h2 className='md:text-4xl text-3xl text-white bg-[#488079] shadow-2xl rounded-t-xl py-5'>Who We Are</h2>
                    </div>
                   <div className='mt-1'></div>
                    <div className='border-gray-950 shadow-2xl bg-[#1b3836]   rounded-b-xl  '>
                        <div className="flex justify-center items-center w-full h-auto pt-10">
                        <p className="md:text-2xl text-white uppercase">Your Trusted Partner for Reliable CCTV Solutions</p>
                       
                        </div>
                        <div className="flex justify-center items-center text-center w-full h-auto px-52 pt-5 ">
                        <p className="md:text-base text-white">China Central Television (CCTV) is a major state television broadcaster in China. It offers a wide range of programming that includes news, documentaries, educational shows, dramas, and sports. CCTV has a significant influence on public opinion in China, being a key tool for the Chinese government to disseminate information and promote cultural values.</p>
                       
                        </div>
                        <div className="flex justify-center items-center text-center w-full h-auto px-60 pt-5 ">
                        <p className="md:text-base text-white">CCTV has embraced technological advancements in broadcasting, such as HD and 4K channels, and is continuously upgrading its infrastructure to improve the quality of its broadcasts. The network also has a strong online presence, with content available on various digital platforms and social media.</p>
                       
                        </div>
                        <div className="flex justify-center items-center w-full h-auto py-16">
                            <Marquee direction="right" pauseOnHover>
                            <div className="pl-3"></div>
                            <div>
                            <Image
                            src={"/intro/img-1.jpg"}
                            alt="web"
                            width={500}
                            height={500}
                            className="object-cover h-[40vh]"
                            />
                            </div>
                            <div className="pl-3"></div>
                            <div>
                            <Image
                            src={"/intro/img-3.jpg"}
                            alt="web"
                            width={500}
                            height={500}
                            className="object-cover  h-[40vh]"
                            />
                            </div>
                            <div className="pl-3"></div>
                            <div>
                            <Image
                            src={"/intro/img-2.jpg"}
                            alt="web"
                            width={500}
                            height={500}
                            className="object-cover  h-[40vh]"
                            />
                            </div>
                            <div className="pl-3"></div>
                            <div>
                            <Image
                            src={"/intro/img-3.jpg"}
                            alt="web"
                            width={500}
                            height={500}
                            className="object-cover  h-[40vh]"
                            />
                            </div>
                            </Marquee>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="pb-10"></div>
        </div>
        
        </>
    );
}

export default AboutSection;
