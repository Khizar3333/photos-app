"use client"
import Heart from '@/components/icons/heart'
import { CldImage } from 'next-cloudinary'
import React, { useTransition } from 'react'
import cloudinary from "cloudinary"
import setasFavoriteAction from './actions'
import { SearchResult } from './page'
import FullHeart from '@/components/icons/full-heart'

const CloudinaryImage = (props:any & {imageData:SearchResult}) => {
    const[transition,startTransition]=useTransition()
    const {imageData}=props
    const isFavorited=imageData.tags.includes("favorite")
 return (
    <div className="relative">
     <CldImage {...props} src={imageData.public_id} />
     {isFavorited&&
         <FullHeart
         onClick={()=>{
          startTransition(()=>{
             setasFavoriteAction(imageData.public_id,false)
          })
         }}
         className='absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer'/>     
     }
     <Heart
     onClick={()=>{
      startTransition(()=>{
         setasFavoriteAction(imageData.public_id,true)
      })
     }}
     className='absolute top-2 right-2 hover:text-red-700 cursor-pointer'/>
     </div>
 )
  
}

export default CloudinaryImage
