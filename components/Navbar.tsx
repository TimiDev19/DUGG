"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Logo from "@/assets/logo.jpg"
import Link from 'next/link';
import { Tektur } from 'next/font/google';
import FadeIn from './FadeIn';
import Sidebar from './Sidebar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import dexTools from "@/assets/dexTools.png"
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import x from "@/assets/x.webp"
import dex from '@/assets/dex-screener-seeklogo.png'
import telegram from "@/assets/telegram.png"

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className=' text-[#6E4D1B] fixed z-50 h-[90px] bg-[#BCDFBC]/50 backdrop-blur-sm w-screen bottom-shadow'
        >
            <div className=' hidden lg:block'>
                <FadeIn>
                    <div
                        className=' w-full h-full flex items-center justify-between px-5'
                    >
                        <div className=' w-[30%] flex items-center justify-start'>
                            <div className={tektur.className}>
                                <Link href={"/#home"} className=' flex items-center justify-center'>
                                    <Image
                                        src={Logo}
                                        alt='$SKINNY LOGO'
                                        className=' h-[80px] w-[80px] rounded-full border border-[#6E4D1B]'
                                    />
                                    <h1 className={`mx-2 text-3xl`}>DUGG</h1>
                                </Link>
                            </div>
                        </div>

                        <div className=' w-[30%] flex items-center justify-center'>
                            <div className={tektur.className}>
                                <div className={'flex items-center justify-center'}>
                                    <nav className="space-x-4">
                                        <Link
                                            href="/#home"
                                            className="relative group"
                                        >
                                            Home
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#about"
                                            className="relative group"
                                        >
                                            About
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#video"
                                            className="relative group"
                                        >
                                            Origin Story
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        {/* <Link
                                            href="#"
                                            className="relative group"
                                        >
                                            Roadmap
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link> */}
                                    </nav>

                                </div>
                            </div>
                        </div>

                        <div className=' w-[30%] flex items-center justify-end'>
                            <div className={tektur.className}>
                                <div className=' flex items-center justify-center'>
                                    <div className=' text-right mr-2'>
                                        <h1>
                                            The community's memecoin <br />
                                            <span className=' text-green-700'>To the moon we go 🚀</span>
                                        </h1>
                                    </div>

                                    <Link target='blank' href={"https://t.me/Dogesretardedbrother"} className=' mx-2 p-2 border border-[#6E4D1B] rounded-2xl flex items-center justify-center font-extrabold bg-[#6E4D1B]/15 backdrop-blur-lg hover:bg-white/0 duration-700'>
                                        <Image
                                            src={Logo}
                                            alt='$SKINNY LOGO'
                                            className=' h-[30px] w-[30px] rounded-full border border-[#6E4D1B] mr-4'
                                        />
                                        Join Telegram
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <div className='block lg:hidden'>
                <FadeIn>
                    <div
                        className=' w-full h-[90px] flex items-center justify-between px-2'
                    >
                        <div className=' h-full flex items-center justify-center'>
                            <div className={tektur.className}>
                                <Link href={"/#home"} className=' h-full flex items-center justify-center'>
                                    <Image
                                        src={Logo}
                                        alt='$SKINNY LOGO'
                                        className=' h-[50px] w-[50px] rounded-full border border-[#ffffff1a]'
                                    />
                                    {/* <h1 className={`mx-2 text-3xl`}>SKINNY</h1> */}
                                </Link>
                            </div>
                        </div>


                        <Link target='blank' href={"https://t.me/Dogesretardedbrother"} className=' mx-2 p-2 border border-[#6E4D1B] rounded-2xl flex items-center justify-center font-extrabold bg-[#6E4D1B]/15 backdrop-blur-lg hover:bg-white/0 duration-700'>
                            <Image
                                src={Logo}
                                alt='$SKINNY LOGO'
                                className=' h-[30px] w-[30px] rounded-full border border-[#6E4D1B] mr-4'
                            />
                            Join Telegram
                        </Link>

                        <button
                            onClick={toggleSidebar}
                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                        >
                            {isOpen ? <CloseOutlinedIcon className='text-4xl text-[#6E4D1B] cursor-pointer' /> : <MenuOutlinedIcon className=' height-[400px] text-4xl text-[#6E4D1B] cursor-pointer' />}
                        </button>

                        {/* Sidebar motion component */}
                        <motion.div
                            initial={{ width: 0 }} // Initial width of sidebar when closed
                            animate={{ width: isOpen ? "100vw" : 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                duration: 0.5,
                            }} // Smooth transition
                            style={{
                                height: "100vh",
                                backgroundColor: "",
                                color: "black",
                                overflow: "hidden",
                                position: "fixed",
                                top: 0,
                                left: 0,
                            }}
                            className=' shadow-md shadow-black bg-[#BCDFBC] text-[#6E4D1B]'
                        >
                            {/* Sidebar content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ padding: "20px" }}
                            >
                                <div className={tektur.className}>
                                    <div className=' flex w-full items-center justify-between mb-8'>
                                        <h3 className=' text-xl text-[#6E4D1B] font-bold'>$DUGG</h3>
                                        <button
                                            onClick={toggleSidebar}
                                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                                        >
                                            {isOpen ? <CloseOutlinedIcon className='text-3xl text-[#6E4D1B]' /> : " "}
                                        </button>
                                    </div>
                                </div>
                                <div className={tektur.className}>
                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                        <Link
                                            href="/#home"
                                            className="relative group text-[#6E4D1B] block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Home
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#about"
                                            className="relative group text-[#6E4D1B] block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            About
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#video"
                                            className="relative group text-[#6E4D1B] block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Origin Story
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#6E4D1B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        {/* <Link
                                            href="#"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Roadmap
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link> */}

                                        <div className=" w-full flex items-center justify-between mt-6">
                                            <Link href="https://dexscreener.com/solana/fdmybaafgaagqrdxtuwcgokmtxtrckwwnffav5evmoon"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={dex}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                            {/*  */}
                                            <Link href="https://t.me/realskinnycto"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={telegram}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                            <Link href="https://x.com/skinnyfellacto"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={x}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                        </div>
                                        <div className=" w-full flex items-center justify-center mt-6">
                                        <Link href="https://t.me/realskinnycto"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-[#6E4D1B] border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={dexTools}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </FadeIn >
            </div>
        </div >
    )
}

export default Navbar