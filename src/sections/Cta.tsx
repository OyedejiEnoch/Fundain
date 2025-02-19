import React from 'react'
import ctaImg from '@/assets/ctaImg.svg'
import Image from 'next/image'
import Button from '@/components/Button'

const Cta = () => {
  return (
    <section id='contact' className='py-24'>
      <div className='container'>
        <div className='border border-white/40 rounded-xl p-6 flex flex-col lg:flex-row gap-10 items-center'>
            <div className='md:hidden lg:flex'>
                <Image src={ctaImg} alt='' width={400}/>
            </div>

            <div className=''>
                <h2 className='text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] via-[#A7A7A7] to-[#e4e4e4] bg-clip-text text-transparent'>Join Our Newsletter</h2>
                <p className='text-[#8A8A8A] max-md:text-sm mt-4 max-w-[700px]'>Sign up for our newsletter to receive the latest updates on fundraising campaigns, success stories, tips, and exclusive offers straight to your inbox.</p>
            

                <div className='flex items-start flex-col md:flex-row md:items-center gap-6 mt-10'>
                    <input type='text' className=' md:w-[400px] px-6 py-5 rounded-full bg-[#262626] text-white/50' placeholder='Enter Your Mail' />
                    <Button variant='primary'>Submit</Button>
                </div>
            
            </div>
        </div>      
      </div>
    </section>
  )
}

export default Cta
