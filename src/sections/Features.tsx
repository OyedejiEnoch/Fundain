'use client'
import Button from '@/components/Button'
import React, { useEffect, useRef } from 'react'
import featureImg1 from '@/assets/featureBox.svg'
import featureImg2 from '@/assets/featureDesx.png'
import Image from 'next/image'
import featureIcon1 from '@/assets/iconFeature1.svg'
import featureIcon2 from '@/assets/iconFeature2.svg'
import featureIcon4 from '@/assets/iconFeature4.svg'
import { useAnimate, useInView, motion } from 'motion/react'
import { stagger } from 'motion'
import SplitType from 'split-type'

const Features = () => {

  const ref =useRef(null)
  const secondRef =useRef(null)
  const inView =useInView(ref, {
        once:true
      });
  const secondInView =useInView(secondRef, {
        once:true
      });

  const [titleScope, titleAnimate] = useAnimate();

  useEffect(()=>{
    new SplitType(titleScope.current, {
        types:'lines,words',
        tagName:'span'
      });
  }, [titleScope])

  useEffect(()=>{
    if(inView){
      titleAnimate( titleScope.current.querySelectorAll('.word'), {
        transform:'translateY(0)'
                                  
        }, {
        duration:0.5,
        delay:stagger(0.2)
      })
    }
  }, [titleScope, titleAnimate, inView])

  return (
    <section id='how-it-works' ref={ref} className='py-24'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-center gap-20'>
            <div className='flex-1'>
                <motion.h2 
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:0.8,
                    duration:0.8,
                    ease:'easeIn'
                }}
                className='text-4xl md:text-5xl  bg-gradient-to-r from-[#FFFFFF] via-[#A7A7A7] to-[#e4e4e4] bg-clip-text text-transparent'>Fundraise in 4 Easy and Impactful Steps</motion.h2>
                <motion.p 
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1,
                }}
                transition={{
                  delay:0.8,
              }}
                ref={titleScope} className='text-[#8A8A8A] max-md:text-sm mt-4'>Start your fundraising journey with ease—create your campaign, share with supporters, track progress,
                and make a real impact. It&apos;s simple, fast, and effective!</motion.p>
                
                <motion.div 
                  initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:inView ? 1 :0,
                }}
                transition={{
                    delay:1,
                    duration:1.3,
                    ease:'easeIn'
                }}
                className='mt-10'>
                <Button variant='primary'>Start Campaign</Button>
                </motion.div>
            </div>

            <motion.div 
              initial={{
                opacity:0,
            }}
            animate={{
                opacity:inView ? 1 :0,
            }}
            transition={{
                delay:1.8,
                duration:0.8,
                ease:'easeIn'
            }}
            className='border border-white/40 pt-10 pl-4 flex-1 rounded-xl'>
                <div className='px-16'>
                <Image src={featureImg1} alt='image' />
                </div>

                <div className='mt-14 pl-10'>
                <Image src={featureImg2} alt='image' />
                </div>
            </motion.div>
        </div>


        <div ref={secondRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-10'>
            <motion.div
               initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:secondInView ? 1 :0,
                y:0
            }}
            transition={{
                delay:0.6,
                duration:0.8,
                ease:'easeIn'
            }}
            >
                <Image src={featureIcon1} alt='' width={30} />
                <h2 className='text-lg md:text-xl mt-4 text-white'>Create a Campaign</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Set up your fundraising goal and deadline in just a few clicks.
                </p>
            </motion.div>

            <motion.div
                   initial={{
                    opacity:0,
                    y:10
                }}
                animate={{
                    opacity:secondInView ? 1 :0,
                    y:0
                }}
                transition={{
                    delay:1,
                    duration:0.8,
                    ease:'easeIn'
                }}
            >
                <Image src={featureIcon2} alt='' width={30} />
                <h2 className='text-lg md:text-xl mt-4 text-white'>Customize Campaign</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Tell your story, add visuals, and share your campaign with the world.
                </p>
            </motion.div>
            
            <motion.div
                initial={{
                    opacity:0,
                    y:10
                }}
                animate={{
                    opacity:secondInView ? 1 :0,
                    y:0
                }}
                transition={{
                    delay:1.4,
                    duration:0.8,
                    ease:'easeIn'
                }}
            >
                <Image src={featureIcon4} alt='' width={30} />
                <h2 className='text-lg md:text-xl mt-4 text-white'>Collect Contributions</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Receive donations directly to your account using blockchain technology.
                </p>
            </motion.div>

            <motion.div
                   initial={{
                    opacity:0,
                    y:10
                }}
                animate={{
                    opacity:secondInView ? 1 :0,
                    y:0
                }}
                transition={{
                    delay:1.7,
                    duration:0.8,
                    ease:'easeIn'
                }}
            >
                <Image src={featureIcon4} alt='' width={30} />
                <h2 className='text-lg md:text-xl mt-4 text-white'>Receive Payouts</h2>
                <p className='max-md:text-sm mt-4 text-[#8A8A8A]'>Funds are released securely and transparently via smart contracts.
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Features
