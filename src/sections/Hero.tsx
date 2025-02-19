'use client'
import Button from '@/components/Button'
import React, { useEffect } from 'react'
import rightArrow from '@/assets/rightArrow.svg'
import Image from 'next/image'
import ImageArrow from '@/components/ImageArrow'
import image1 from '@/assets/imagePic4.jpg'
import image2 from '@/assets/imgArrow.png'
import image3 from '@/assets/imgPic26.jpg'
import image4 from '@/assets/imgPic24.jpg'
import logo1 from '@/assets/unicefLogo.svg'
import logo2 from '@/assets/americanRedLogo.svg'
import logo3 from '@/assets/saveChildrenLogo.svg'
import logo4 from '@/assets/habitat 1.svg'
import logo5 from '@/assets/worldHealthLogo.svg'
import {motion, stagger, useAnimate} from 'motion/react'
import SplitType from 'split-type'

const Hero = () => {

    const [scope, animate]=useAnimate()

    useEffect(()=>{
        new SplitType(scope.current, {
            types:'lines,words',
            tagName:'span'
        });

        animate( scope.current.querySelectorAll('.word'), {
            transform:'translateY(0)'
            
          }, {
            duration:0.3,
            delay:stagger(0.2)
          })
    }, [scope, animate])

    const logos = [
        { name: "Unicef", image: logo1 },
        { name: "American Red Cross", image: logo2 },
        { name: "Stc", image: logo3 },
        { name: "Habitat", image: logo4 },
        { name: "Who", image: logo5 },
    ];
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <section id='home' className='mt-16 pt-40 pb-24 overflow-hidden'>
        <div className='container relative'>
            <motion.h2 
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration:1,
                ease:'easeInOut'
            }}
            className='text-center text-4xl md:text-5xl lg:text-6xl text-white'>Raise Funds, Build Dreams, With Complete Transparency</motion.h2>

            <motion.p 
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
            }}
            transition={{
                delay:0.8,
                ease:'easeIn'
            }}
            ref={scope} className='text-center text-[#8A8A8A] max-w-[600px] mx-auto mt-10     w-full'>Join the future of crowdfunding powered by blockchain. Start your campaign today and secure funding with trust, security, and ease.</motion.p>


            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10'>
                <motion.div
                initial={{
                    opacity:0,
                    y:10
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.8,
                    delay:1.2,
                    ease:'easeIn'
                }}
                >    
                <Button variant='primary'>Start Campaign</Button>
                </motion.div>

                <motion.div
                  initial={{
                    opacity:0,
                    y:10
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.8,
                    delay:1.5,
                    ease:'easeIn'
                }}
                >
                <Button variant='secondary' iconAfter={<Image src={rightArrow} alt='icon'  width={20} height={50}/>} >How it works</Button>
                </motion.div>
            </div>

            <motion.div 
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                delay:2,
                ease:'easeIn'
            }}
            drag
            className='absolute -top-16 md:-top-10 left-2 md:-left-2'>
                <ImageArrow imageShow={image3} className='top-5 right-5 rotate-[180deg]'   />
            </motion.div>

            <motion.div 
              initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                delay:2.3,
                ease:'easeIn'
            }}
            drag
            className=' absolute -top-20 -right-0 md:-right-12 md:-top-14'>
                <ImageArrow imageShow={image1} className='-left-10 top-10 -rotate-45'   />
            </motion.div>

            <motion.div 
              initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                delay:2.7,
                ease:'easeIn'
            }}
            drag
            className='hidden md:flex absolute left-20 md:bottom-10'>
                <ImageArrow imageShow={image4} className='-top-2 right-5 rotate-[140deg]'   />
            </motion.div>

            <motion.div 
              initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                delay:3.1,
                ease:'easeIn'
            }}
            drag
            className='hidden md:flex absolute right-4 bottom-10'>
                <ImageArrow imageShow={image2} className='top-1 -left-10'   />
            </motion.div>
           
        </div>

        <div className='container '>
            <motion.div 
             initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
            }}
            transition={{
                delay:3.5,
            }}
            className='flex mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>

            <motion.div 
           
              animate={{
                opacity:1,
                x:'-50%',
            }}
            transition={{
                duration:18,
                ease:'linear',
                repeat:Infinity
            }}
            className='flex flex-none items-center gap-24 pr-24  '>
                    {Array.from({length:2}).map((_,i)=>(
                        <React.Fragment key={i}>
                            {logos.map((logo)=>(
                                <Image key={logo.name} src={logo.image} alt={logo.name} className='size-32' />
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </motion.div>

        </div>


    </section>
  )
}

export default Hero
