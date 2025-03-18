import React from 'react'
import { Tektur } from 'next/font/google';
import Link from 'next/link';
import dex from '@/assets/dex-screener-seeklogo.png'
import telegram from "@/assets/telegram.png"
import x from "@/assets/x.webp"
import Image from 'next/image';
import FadeInFromBottom from '@/components/FadeInFromBottom';
import FadeInFromRight from '@/components/FadeInFromRight';
import FadeIn from '@/components/FadeIn';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Video = () => {
    return (
        <div
            id="video"
            className=' w-screen flex flex-col items-center justify-center min-h-[100vh] text-white bg-[#171717]'
        >
            <div className={tektur.className}>
                <FadeIn>
                    <h1 className=' text-3xl lg:text-4xl font-extrabold mb-4 text-center'>Skinny Nigga Szn</h1>
                </FadeIn>
                <FadeInFromBottom>
                    <div className=' w-[95vw] h-[30vh] lg:w-[65vw] lg:h-[60vh] bg-white relative mb-[20px]'>
                        <video
                            src="/skinny-video-final.mp4"
                            className="absolute inset-0 object-cover w-full h-full"
                            autoPlay
                            loop
                            playsInline
                            muted
                            controls={false}
                        ></video>
                    </div>
                </FadeInFromBottom>
                <FadeInFromRight>
                    <div className=' flex items-center justify-center'>
                        <Link href="https://dexscreener.com/solana/fdmybaafgaagqrdxtuwcgokmtxtrckwwnffav5evmoon"
                            target='blank'
                            className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                        >
                            <Image
                                src={dex}
                                alt=''
                                className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                            />
                        </Link>
                        <Link href="https://t.me/realskinnycto"
                            target='blank'
                            className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                        >
                            <Image
                                src={telegram}
                                alt=''
                                className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                            />
                        </Link>
                        <Link href="https://x.com/skinnyfellacto"
                            target='blank'
                            className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                        >
                            <Image
                                src={x}
                                alt=''
                                className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                            />
                        </Link>
                    </div>
                </FadeInFromRight>
            </div>
        </div>
    )
}

export default Video