import Image from 'next/image'
import React from 'react'
import fundainLogo from '@/assets/fundaneLogo.svg'
import linkedin from '@/assets/LinkedIn.svg'
import instagram from '@/assets/Instagram.svg'
import twitterx from '@/assets/TwitterX.svg'

const Footer = () => {

    const footerLinks =[
        {
            title:'About Us',
            links:['Our History', 'Corporate Profile', 'Our Awards', 'Businesses']
        },
        {
            title:'Quick Links',
            links:['Home', 'Why Us', 'Donation', 'FAQs']
        },
        {
            title:'Contact Us',
            links:['Support', 'Agent', '+781 908 875 9745', 'Help@fundain.com']
        },
    ]

  return (
    <section className=''>
      <div className='container pt-24  border-t border-white/20 '>
        <div className='flex justify-between flex-wrap gap-10'>
            <div className='flex flex-col gap-6'>
                <Image src={fundainLogo} alt='logo' className='w-[150px]' />
                <p className='text-[16px] text-[#8A8A8A] max-w-[350px]'>Join the future of crowdfunding powered by blockchain. Start your campaign today and secure funding with trust, security, and ease.</p>

                <div className='flex items-center gap-4'>
                    <Image src={linkedin} alt='linkedin-logo' width={30} height={30}/>
                    <Image src={instagram} alt='instagram-logo' width={30} height={30}/>
                    <Image src={twitterx} alt='twitterx-logo' width={30} height={30}/>
                </div>
            </div>


            <div className='flex items-center gap-20 flex-wrap'>
                {footerLinks.map((link)=>(
                    <div key={link.title}>
                    <h2 className='font-semibold text-lg' >{link.title}</h2>

                    <div className='flex flex-col gap-6 mt-8'>

                    {link.links.map((item, i)=>(
                        <span key={i} className='text-[#8A8A8A] text-sm'>{item}</span>
                    ))}
                    </div>
                    
                </div>
                ))}
            </div>
        </div>

      </div>

      <div className='bg-[#262626] px-6 py-6  text-white/40 mt-20'>
                
        <div className='container flex justify-between flex-wrap gap-10'>
            <div className='text-sm'>
            <h2>©Copyright Fundain 2025</h2>
            </div>

            <div className='flex items-center gap-16 text-sm'>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
