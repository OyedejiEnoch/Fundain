'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import aboutImg1 from '@/assets/aboutImg1.png'
import aboutImg2 from '@/assets/aboutImg2.png'
import aboutImg3 from '@/assets/aboutImg3.png'
import aboutImg4 from '@/assets/aboutImg4.png'
import aboutImg5 from '@/assets/aboutImg5.png'
import aboutImg6 from '@/assets/aboutImg6.png'
import aboutImg7 from '@/assets/aboutImg7.png'
import SplitType from "split-type";
import { useAnimate, useInView, motion } from 'motion/react'
import { stagger } from 'motion'

const About = () => {

    const ref =useRef(null)
    const [titleScope, titleAnimate] = useAnimate();
    const [sectonTitleScope, sectonTitleAnimate] = useAnimate();
    const inView =useInView(ref, {
      once:true
    });

    useEffect(()=>{
        new SplitType(titleScope.current, {
                   types:'lines,words',
                   tagName:'span'
        });
        new SplitType(sectonTitleScope.current, {
                   types:'lines,words',
                   tagName:'span'
        });
   
    }, [titleScope, sectonTitleScope])

    useEffect(()=>{
            if(inView){

                titleAnimate( titleScope.current.querySelectorAll('.word'), {
                    transform:'translateY(0)'
                            
                  }, {
                    duration:0.5,
                    delay:stagger(0.2)
                })
                sectonTitleAnimate( sectonTitleScope.current.querySelectorAll('.word'), {
                    transform:'translateY(0)'
                            
                  }, {
                    duration:0.5,
                    delay:stagger(0.2)
                })
            }
    },[titleAnimate, titleScope, inView, sectonTitleScope, sectonTitleAnimate])

  return (
    <section id='why-us' ref={ref} className='py-24'>
      <div className='container'>
        <motion.h2  
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:inView ? 1 :0,
        }}
        transition={{
            delay:0.5,
            duration:0.6,
            ease:'easeIn'
        }}

        className='text-center text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFFFFF] via-[#A7A7A7] to-[#444444] bg-clip-text text-transparent'>Why Trust Our Platform?</motion.h2>
        <p ref={titleScope} className='text-[#8A8A8A] max-md:text-sm text-center mt-10 max-w-[550px] mx-auto'>We make fundraising simple, secure, and transparent—giving you the trust and tools you need to succeed.</p>
      

        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 '>
            <motion.div 
            initial={{
                opacity:0,
            }}
            animate={{
                opacity:inView ? 1 :0,
            }}
            transition={{
                delay:1,
                duration:0.6,
                ease:'easeIn'
            }}
            className='col-span-12 border border-white/40 rounded-xl pt-12 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='px-4 md:px-10'>
                        <h2 className='text-3xl text-white'>Transparent Fundraising</h2>
                        <p className='text-[#8A8A8A] text-sm mt-6'>Every transaction is recorded on the blockchain, making your campaign completely transparent and trustworthy.</p>
                        
                        <div className='mt-10'>
                        <Button variant='primary'>Explore All</Button>
                        </div>
                    </div>

                    <div>
                        <Image src={aboutImg1} alt='image' className='rounded-2xl' />
                    </div>
                </div>
            </motion.div>
            
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <motion.div
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:1.7,
                    duration:0.6,
                    ease:'easeIn'
                }}
                className='border border-white/40 rounded-xl pt-10 mt-10'>
                    <h2 className='text-center text-xl font-semibold text-white'>Smart Contracts Automation</h2>
                    <p className='text-center mt-4 text-sm text-[#8A8A8A] max-w-[400px] mx-auto'>Smart contracts automate payouts, ensuring secure and fair fund handling.</p>
                    
                    <div className='mt-10'>
                    <Image src={aboutImg2} alt='image' />
                    </div>
                </motion.div>

                <motion.div 
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:2,
                    duration:0.6,
                    ease:'easeIn'
                }}
                className='border border-white/40 rounded-xl pt-10 mt-10'>
                    <h2 className='text-center text-xl font-semibold text-white'>Global Access</h2>
                    <p className='text-center mt-4 text-sm text-[#8A8A8A] max-w-[400px] mx-auto'>Raise funds from anyone, anywhere in the world. No borders. No restrictions.</p>
                    
                    <div className='mt-10'>
                    <Image src={aboutImg3} alt='image' />
                    </div>
                </motion.div>
         </div>


         <div className='flex flex-col lg:flex-row items-center gap-16 mt-24'>

            <div className='flex '>
                <motion.div 
                 initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:2.6,
                    duration:0.6,
                    ease:'easeIn'
                }}
                className='flex flex-col'>
                    <Image src={aboutImg4} alt='image' className='' width={300} height={200}  />
                    <Image src={aboutImg5} alt='image' className='' width={300} height={200} />
                </motion.div>

                <motion.div 
                 initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:3.2,
                    duration:0.6,
                    ease:'easeIn'
                }}
                
                className='flex flex-col gap-6 -mt-10'>
                    <Image src={aboutImg6} alt='image' className='' width={200} height={200}  />
                    <Image src={aboutImg7} alt='image' className='' width={200} height={200} />
                </motion.div>
            </div>


            <section id='donation' className='flex-1'>
                <motion.h2
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:3,
                    duration:0.6,
                    ease:'easeIn'
                }}
                className='text-3xl md:text-5xl font-semibold  bg-gradient-to-r from-[#FFFFFF] via-[#A7A7A7] to-[#444444] bg-clip-text text-transparent'>Building Better Lives Together.</motion.h2>
                <p ref={sectonTitleScope} className='mt-6 text-sm text-[#8A8A8A]'>Your support opens doors to health, education, food, and jobs. With blockchain, every donation is secure, transparent, and makes a lasting impact
                 where it&apos;s needed most.</p>
                 
                 <div className='mt-10'>
                 <Button variant='primary'>
                    Top Donation Categories
                 </Button>
                 </div>
                    
            </section>

         </div>
      
      </div>


    </section>
  )
}

export default About
