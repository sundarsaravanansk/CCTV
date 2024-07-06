import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute top-0 z-50  w-full'>
            <div className=' bg-[#49644a]  w-full mt-8 md:mt-14 max-w-[85%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[50%] mx-auto rounded-full shadow-xl'>
                <div className='md:py-5 md:px-10 py-3 px-7'>
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center md:text-3xl md:font-semibold text-white'>
                            <div className='flex md:gap-3 gap-1'>
                                <Image
                                    src={"/intro/cctv_icon2.png"}
                                    alt='cctv'
                                    width={100}
                                    height={100}
                                    className='md:w-9 md:h-9 w-5 h-5'
                                />
                                <h1 className=''>C<span className='text-base'></span>C<span className='text-base'></span>T<span className='text-base'></span>V</h1>
                            </div>
                        </div>
                        <div className='hidden lg:flex items-center justify-center gap-6 md:text-lg md:font-normal text-white'>
                            <Link href={"#Home"}>Home</Link>
                            <Link href={"#About"}>About</Link>
                            <Link href={"#Products"}>Products</Link>
                            <Link href={"#Contact"}>Contact</Link>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex gap-3'>
                                <Link href="https://api.whatsapp.com/send?phone=919655608252&text=Hi!  cctv Enquiry" target='_blank'>
                                    <Image
                                        src={"/intro/instagram_icon2.png"}
                                        alt='insta'
                                        width={29}
                                        height={29}
                                    />
                                </Link>
                                <Link href="https://api.whatsapp.com/send?phone=919655608252&text=Hi!  cctv Enquiry" target='_blank'>
                                    <Image
                                        src={"/intro/whatsapp.svg"}
                                        alt='whatsapp'
                                        width={30}
                                        height={30}
                                    />
                                </Link>

                            </div>
                        </div>
                        <div className='lg:hidden'>
                        <button><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"></path><path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
