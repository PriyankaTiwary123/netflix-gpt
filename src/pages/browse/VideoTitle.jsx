import React from 'react'

const VideoTitle = (props) => {
    const {title, overview} = props;
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black font-bold w-auto py-1 md:p-4  px-3 md:px-12 rounded-lg hover:opacity-80'> Play</button>
            <button className=' hidden md:inline-block mx-2 bg-gray-500 text-white w-auto p-4 px-12 bg-opacity-50 rounded-lg hover:opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle