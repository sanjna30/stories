import React, { useEffect, useRef, useState } from 'react'

const Story = ({selectUser, selectedUser}) => {
  const [growth, setGrowth] = useState(0);
  const growthRef = useRef(null);
   // Ensure count is initialized
   

  // const interval = setInterval(function(){
  //   if (growth >= 100) {
  //     clearInterval(interval); 
  //   } else {
  //     setGrowth(growth+10)
  //     console.log(growth);
  //   }
  // },5);

  useEffect(() => {
    // Start the growth animation
    const interval = setInterval(() => {
      setGrowth((prevGrowth) => {
        if (prevGrowth >= 100) {
          selectUser(null);
          clearInterval(interval); // Stop the interval when growth reaches 100

          return 100;
        }
        return prevGrowth + 1; // Increment growth by 1
      });
    }, 50); // Adjust the interval timing as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  //this is changing the width on changing the growth value
  useEffect(() => {
    // Update the width of the growth bar dynamically
    if (growthRef.current) {
      growthRef.current.style.width = `${growth}%`;
    }
  }, [growth]);



  return (
    <div className='bg-white w-[25vw] h-[80vh] rounded-2xl px-2 '
    style={{ backgroundImage: `url(${selectedUser.download_url})`,  backgroundSize: 'cover',
      backgroundPosition: 'center',  }}
    >
       <div className='loader w-[97%] bg-[#a09c9c]  h-2 rounded-[5vh] mt-4 ml-1'>
          <div ref={growthRef} className=' bg-slate-200 rounded-[5vh] h-full'>  
          </div>
       </div>

       <div className='flex justify-between items-center py-3 px-2'>
            <div className='flex gap-2 items-center'>
                <div className='w-10 h-10 rounded-full bg_Color p-1 overflow-hidden '>
                   <img className='w-full h-full object-cover rounded-full' src={selectedUser.download_url} alt="" />
                </div>
                <h1>{selectedUser.author}</h1>
            </div>

            <i onClick={()=>{
               selectUser(null)
            }} class="text-xl ri-close-line"></i>
       </div>
    </div>
  )
}

export default Story