'use client'
import React, { useState } from 'react'
import fundainLogo from '@/assets/fundaneLogo.svg'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion } from 'motion/react'

const Header = () => {

    const navLinks =[
        {
            id:1,
            name:'Home',
            href:'#home',
            color:'text-white',
        },
        {
            id:2,
            name:'Why us',
            href:'#why-us',
            color:'text-white/30',
        },
        {
            id:3,
            name:'Donation',
            href:'#donation',
            color:'text-white/30',
        },
        {
            id:4,
            name:'How it works',
            href:'#how-it-works',
            color:'text-white/30',
        },
        {
            id:5,
            name:'Contact',
            href:'#contact',
            color:'text-white/30',
        },
    ]

    const [isOpen, setIsOpen]=useState(false)


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleNavClick =(e:any)=>{
        e.preventDefault();
        // setIsOpen(false)
    
        const url =new URL(e.currentTarget.href);
        const hash =url.hash
    
        const target =document.querySelector(hash);
    
        if(!target) return;
        target.scrollIntoView({behavior:'smooth'})
    
      }

  return (
    <section className='py-4 md:py-10 fixed w-full top-0 z-50 backdrop-blur'>
      <div className='container'>
        <div className='flex items-center justify-between'>
            <Image src={fundainLogo} alt='fundain-logo' className='w-[150px]' />


            <nav className='hidden lg:flex space-x-10 items-center border border-gray-500 rounded-full px-6 py-3 text-sm'>
                {navLinks.map((link)=>(
                    <a key={link.id} onClick={handleNavClick} href={link.href} className={twMerge('text-white/30', link.color)}>
                        {link.name}
                    </a>
                ))}
            </nav>


            <button className='hidden lg:flex border border-gray-500 rounded-full px-6 py-2 text-sm leading-7'>
                Create Account
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        className="feather feather-menu md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                <line x1="3" y1="6" x2="21" y2="6"  className={(twMerge('origin-left  transition duration-200', isOpen && 'rotate-45 -translate-y-1'))}></line>
                <line x1="3" y1="12" x2="21" y2="12" className={(twMerge(' transition duration-200',isOpen && 'opacity-0'))}></line>
                <line x1="3" y1="18" x2="21" y2="18" className={(twMerge('origin-left  transition duration-200',isOpen && '-rotate-45 translate-y-1'))}></line>
            </svg>
        </div>
      </div>
      <AnimatePresence>
                    {isOpen && 
                        <motion.div 
                        initial={{height:0}}
                        animate={{height:'auto'}}
                        exit={{height:0}}
                        className="overflow-hidden ">
                            <div className="flex flex-col items-center gap-4 py-4">
                                {navLinks.map(link=>(
                                    <a href={link.href} key={link.name} onClick={handleNavClick} className="">{link.name}</a>
                                ))}
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
    </section>
  )
}

export default Header
