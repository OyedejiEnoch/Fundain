import React from 'react'
import imageArrow from '@/assets/imageArrrow.svg'
import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props ={
    imageShow:StaticImageData,
    className:string,
}

const ImageArrow = ({imageShow, className}:Props) => {
  return (
    <div className='relative w-[120px]'>
        <div className='border-[3px] border-[#BFEE5C] rounded-full size-12 md:size-14 '>
        <Image draggable='false' src={imageShow} alt='image' className='w-full h-full object-cover rounded-full' width={80} height={80} />
        </div>
        
        <div className={twMerge('absolute', className && className)}>
            <Image src={imageArrow} alt='image-arrow' className='size-6 md:size-10' />
        </div>
    </div>
  )
}

export default ImageArrow


// top-1 -left-10
//  -left-10 top-10 -rotate-45
// -top-2 right-5 rotate-[140deg]
// top-5 right-5 rotate-[180deg]