import React from 'react'
import Uploadbutton from './Upload-button'
// import cloudinary from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from './cloudinary-image'
export type SearchResult={
  public_id:string,
  tags:string[]
}

cloudinary.config({ 
  cloud_name: 'dgiuwzze8', 
  api_key: '246528386646775', 
  api_secret: 'Wgx_e6oHczaICKUXKjCP9KbXXa4',
  secure: true
});

const Gallery = async() => {

  const results=(await cloudinary.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(1)
      .execute()) as unknown as {resources: SearchResult[]}
  // .then(result=>console.log(result));
  console.log("result",results)

  return (
    <section>
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between'>
    <h1 className='text-4xl font-bold'>Gallery</h1>
    <Uploadbutton
      
    />
    </div>
    <div className='grid grid-cols-4 gap-4'>
    {results.resources.map(result=>(
      <CloudinaryImage
      key={result.public_id}
      // src={result.public_id}
      // publicid={result.public_id}
      imageData={result}
      width="400"
      height="300"
      alt="an image of something"
      />
    ))}
    </div>
    </div>
    </section>
  )
}

export default Gallery

function field(arg0: string) {
  throw new Error('Function not implemented.')
}
