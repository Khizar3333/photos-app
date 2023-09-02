"use client"

import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
export type UploadResult={
  info:{
    public_id:string;
  };
  event:"success";

  
};

export default function Home() {
  const [imageid, setImageid] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-ignore  */}
    <CldUploadButton onUpload={(result:UploadResult)=>{
       setImageid(result.info.public_id)}} 
      uploadPreset="nbgveq7l"
      />
       
    {imageid&& ( 
    <CldImage
  width="400"
  height="300"
  src={imageid}
  
  sizes="100vw"
  alt="Description of my image"
/>
)}
    </main>
  )
}
