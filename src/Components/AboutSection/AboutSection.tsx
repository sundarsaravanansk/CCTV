"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import React from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {

    useGSAP(()=>{
     
        gsap.to('.panel', {
            scrollTrigger: {
              trigger: '.panel',
              start: 'top top',
              end: '+=100%',
              pin: true,
              scrub: true,
              
            },
          });

   

    })
    return (
        <div className='md:h-screen md:pt-14 bg-[#eeecee] panel sq'>
            <div className='container mx-auto'>
                <div>
                    <div className='text-center uppercase'>
                        <h2 className='md:text-6xl text-3xl text-black bg-white shadow-2xl rounded-t-xl py-5'>About-us</h2>
                    </div>
                   <div className='mt-1'></div>
                    <div className='bg-white shadow-2xl  h-[70vh] rounded-b-xl '>
                  

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
