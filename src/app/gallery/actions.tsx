"use server"
import React from 'react'
import cloudinary from "cloudinary"
import { revalidatePath } from 'next/cache'

const setasFavoriteAction = async(
  publicid:string,
  isFavorite:boolean
  
  ) => {
    if (isFavorite) {
      // console.log('removing'+ publicid)
      
      await cloudinary.v2.uploader.add_tag('favorite',[publicid]);
    }
    else{
      
      await cloudinary.v2.uploader.remove_tag('favorite',[publicid]);
    }
    revalidatePath('/gallery');
  
}

export default setasFavoriteAction
