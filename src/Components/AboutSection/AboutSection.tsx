import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='h-screen md:pt-14 bg-[#0c022a]'>
            <div className='container mx-auto'>
                <div>
                    <div className='text-center uppercase'>
                        <h2 className='md:text-6xl text-white'>About-us</h2>
                    </div>
                    <div className='md:pt-16'></div>
                    <div className='grid md:grid-cols-2'>
                        <div>
                            <Image
                            src={"/About/webcam.jpg"}
                            alt='webcam'
                            width={800}
                            height={800}
                            className='w-[800px] h-[auto] object-cover rounded-lg'
                            />
                        </div>
                        <div>
                            <Image
                            src={"/About/webcam.jpg"}
                            alt='webcam'
                            width={800}
                            height={800}
                            className='w-[800px] h-[auto] object-cover rounded-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
