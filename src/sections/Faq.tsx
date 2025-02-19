'use client'
import Button from '@/components/Button'
import React, { useRef } from 'react'
import {useInView, motion } from 'motion/react'
// import { Card, CardContent } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Faq = () => {

  const ref =useRef(null)
   const inView =useInView(ref, {
          once:true
    });

  return (
    <section ref={ref} className='py-24'>
      <div className='container pt-24  border-t border-white/40'>
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
                <h2 className='text-[#8A8A8A] max-md:text-sm mt-4 max-w-[700px]'>Find answers to your most common questions about setting up and managing your fundraising campaigns. We&apos;re here to make the process simple, 
                secure, and transparent every step of the way.</h2>
                <div className='mt-10'>
                <Button variant='primary'>Read More</Button>
                </div>
            </motion.div>
        </div>

        <div className='mt-10'>
        <Carousel className="w-full">
        <CarouselContent className='w-full'>
        <CarouselItem className='flex w-full flex-col md:flex-row  gap-10 p-4'>
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
                <h2 className='text-lg md:text-xl mt-4 text-white'>What can I fundraise for?</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Find answers to your most common questions about setting up and managing your fundraising campaigns. 
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
                <h2 className='text-lg md:text-xl mt-4 text-white'>Is my donation secure?</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Yes! We use blockchain technology to ensure that every donation is secure, transparent, 
                and tracked. You can see exactly where your funds go, making the process fully trustworthy.
                </p>
            </motion.div>
            </CarouselItem>

            {/* second slide */}
        <CarouselItem className='flex w-full flex-col md:flex-row gap-10 p-4'>
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
                <h2 className='text-lg md:text-xl mt-4 text-white'>What can I fundraise for?</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Find answers to your most common questions about setting up and managing your fundraising campaigns. 
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
                <h2 className='text-lg md:text-xl mt-4 text-white'>Is my donation secure?</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Yes! We use blockchain technology to ensure that every donation is secure, transparent, 
                and tracked. You can see exactly where your funds go, making the process fully trustworthy.
                </p>
            </motion.div>
            </CarouselItem>

        </CarouselContent>

        <CarouselPrevious />
      <CarouselNext />
        </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Faq
