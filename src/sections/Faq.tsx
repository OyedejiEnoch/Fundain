'use client'
import Button from '@/components/Button'
import React, { useRef } from 'react'
import {useInView, motion } from 'motion/react'

const Faq = () => {

  const ref =useRef(null)
   const inView =useInView(ref, {
          once:true
    });

  return (
    <section ref={ref} className='py-24'>
      <div className='container pt-24  border-t border-white/20'>
        <div className='flex flex-col md:flex-row gap-10'>
        <motion.h2 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:inView ? 1 :0
        }}
        transition={{
          delay:0.8,
          duration:0.8,
          ease:'easeIn'
        }}
        className='text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] via-[#A7A7A7] to-[#e4e4e4] bg-clip-text text-transparent'>Frequently Asked Questions (FAQ)</motion.h2>

            <motion.div
             initial={{
              opacity:0
            }}
            animate={{
              opacity:inView ? 1 :0
            }}
            transition={{
              delay:1.2,
              duration:0.8,
              ease:'easeIn'
            }}
            >
                <h2 className='text-white/50 max-md:text-sm mt-4 max-w-[700px]'>Find answers to your most common questions about setting up and managing your fundraising campaigns. We&apos;re here to make the process simple, 
                secure, and transparent every step of the way.</h2>
                <div className='mt-10'>
                <Button variant='primary'>Read More</Button>
                </div>
            </motion.div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            <motion.div
             initial={{
              opacity:0
            }}
            animate={{
              opacity:inView ? 1 :0
            }}
            transition={{
              delay:1.6,
              duration:0.8,
              ease:'easeIn'
            }}
            >
                <h2 className='text-lg md:text-xl mt-4'>What can I fundraise for?</h2>
                <p className='max-md:text-sm mt-4 text-white/50'>Find answers to your most common questions about setting up and managing your fundraising campaigns. 
                We&apos;re here to make the process simple, secure, and transparent every step of the way.
                </p>
            </motion.div>

            <motion.div
             initial={{
              opacity:0
            }}
            animate={{
              opacity:inView ? 1 :0
            }}
            transition={{
              delay:2,
              duration:0.8,
              ease:'easeIn'
            }}
            >
                <h2 className='text-lg md:text-xl mt-4'>Is my donation secure?</h2>
                <p className='max-md:text-sm mt-4 text-white/50'>Yes! We use blockchain technology to ensure that every donation is secure, transparent, 
                and tracked. You can see exactly where your funds go, making the process fully trustworthy.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faq
