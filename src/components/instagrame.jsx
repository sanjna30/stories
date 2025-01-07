import React from 'react'
import Navbar from './comp/Navbar'
import StorySection from './comp/StorySection'

const Instagram = ({data ,selectUser}) => {
  return (
    <div className='bg-white w-[25vw] h-[80vh] rounded-2xl'>
        <Navbar/>
        <StorySection data={data} selectUser = {selectUser} />
        <hr />
    </div>
  )
}

export default Instagram