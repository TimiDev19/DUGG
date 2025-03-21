"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import heroImg from "@/assets/dugggggg.jpg"
import { Tektur } from 'next/font/google';
import Link from 'next/link';
import dex from '@/assets/dex-screener-seeklogo.png'
import dexTools from "@/assets/dexTools.png"
import telegram from "@/assets/telegram.png"
import x from "@/assets/x.webp"
import { CopyAll } from '@mui/icons-material';
import FadeIn from '@/components/FadeIn';
import FadeInFromBottom from '@/components/FadeInFromBottom';
import FadeInFromRight from '@/components/FadeInFromRight';
import ImageSlider from '@/components/ImageSlider';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `GBLMVFNai3UNvxNn1NQHah7MvbwnQMrNVtcWVghepump`;

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div id='home' className='text-[#6E4D1B] bg-[#BCDFBC]  lg:h-[100vh] pt-[90px] w-screen flex flex-col items-center justify-start px-[20px]'>
            <div className=' h-[75%] w-full flex flex-col lg:flex-row items-end justify-between'>
                <div className=' lg:w-[50%] pb-[10px]'>
                    <FadeInFromBottom>
                        <div className={tektur.className}>
                            <div className=' font-extrabold uppercase font-sans'>
                                <h1 className=' text-4xl lg:text-5xl mb-3 text-[#6E4D1B]'>Doge's Retarded Brother</h1>
                                <div className=' p-2 rounded-lg bg-[#6E4D1B] text-[#BCDFBC] w-fit text-3xl lg:text-4xl mb-4'>
                                    <h1 className={tektur.className}>the community's memecoin!</h1>
                                </div>
                                <div className=' flex items-center justify-start'>
                                    <Link href="https://dexscreener.com/solana/GBLMVFNai3UNvxNn1NQHah7MvbwnQMrNVtcWVghepump"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={dex}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                    <Link href="https://www.dextools.io/app/en/solana/pair-explorer/CEA31ZVBVs5efNPhdvRAbHecJ4My21HLhUCk2kmjvgUZ"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={dexTools}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                    <Link href="https://t.me/Dogesretardedbrother"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={telegram}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                    <Link href="https://x.com/dugg_cto"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={x}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' lg:w-[40%]'>
                    <FadeIn>
                        {/* <Image
                            src={heroImg}
                            alt=''
                            className=' w-[90%] mx-auto'
                        /> */}
                        <div className=' w-[90%] mx-auto'>
<ImageSlider/>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <FadeInFromRight>
                <div className=' flex items-center justify-end w-full'>
                    <div className=' bg-[#6E4D1B] lg:h-[100px] w-[97%] mx-auto lg:mx-0 lg:w-[75%] flex flex-col lg:flex-row items-center justify-between text-[#BCDFBC] p-4'>
                        <div className={tektur.className}>
                            <div onClick={handleCopy} className=' max-w-[90vw] lg:max-w-[30vw] flex flex-col items-center justify-center bg-transparent text-black py-1 w-[95%] lg:w-fit mx-auto lg:mx-0 px-4 rounded-md'>
                                <h1 className=" w-full truncate mr-4 cursor-pointer font-extrabold text-[#BCDFBC] break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                                    {textToCopy}
                                </h1>
                                <h1 className=' cursor-pointer text-[#BCDFBC]'>{copied ? (<span className="text-[#BCDFBC]">Text copied to clipboard!</span>) : (<span><CopyAll /> Click to copy CA</span>)}</h1>
                                {/* {copied && <} */}
                            </div>
                        </div>

                        <div className=' lg:w-[45%] text-sm'>
                            <div className={tektur.className}>
                                Hey chads, hop the $DUGG train...next stop? The moon 🤑. <br />
                                We're here to make a difference, let's come together and ensure we all make money as a community!
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInFromRight>
        </div>

    )
}

export default Hero