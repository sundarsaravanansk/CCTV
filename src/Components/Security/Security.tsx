import Image from 'next/image';
import React from 'react';

const Security = () => {
    return (
        <div className='z-[999]'>
            <div className='h-screen rounded-xl'>
                <div>
                    <div>
                        <Image
                        src={"/aboutabove/watch-concept.jpg"}
                        alt='security'
                        width={1500}
                        height={1500}
                        className='object-cover h-screen w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Security;
