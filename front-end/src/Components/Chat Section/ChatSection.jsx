
import React, { useContext } from 'react'
import SidebarContext from '../../Context/SidebarContext'
import ThemeContext from '../../Context/ThemeContext'

const chatSection = () => {
    const { sidebarStatus} = useContext(SidebarContext)
    let { theme } = useContext(ThemeContext)

  return (
    <section className={`flex flex-col ${sidebarStatus==true?"ml-0 lg:ml-[20%] md:ml-[35%] h-full":"m-0"}`}>
      
      <div className='flex justify-end'>
        <article className={`${theme === "light" ? "bg-gray-600" : "bg-white border border-1"} max-w-[70%] sm:max-w-[35%] lg:max-w-[25%] mr-[20px] mt-[20px] rounded-md px-5 py-3 `}>
        <header >
          <h1 className='font-bold'>User</h1>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur explicabo iste illum corrupti doloremque suscipit magnam. Omnis, culpa voluptas! Neque, cupiditate distinctio. Beatae eveniet animi repellendus illum architecto labore sit temporibus amet corporis dolores? Dignissimos animi nemo quo temporibus.</p>
      </article>
      </div>
      
      <div className='flex justify-start'>
        <article className={`${theme === "light" ? "bg-gray-600" : "bg-white border border-1"} max-w-[70%] sm:max-w-[35%] lg:max-w-[25%] ml-[20px] mt-[20px] rounded-md px-5 py-3 `}>
        <header >
          <h1 className='font-bold'>User</h1>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur explicabo iste illum corrupti doloremque suscipit magnam. Omnis, culpa voluptas! Neque, cupiditate distinctio. Beatae eveniet animi repellendus illum architecto labore sit temporibus amet corporis dolores? Dignissimos animi nemo quo temporibus.</p>
      </article>
      </div>
      
    </section>
  )
}

export default chatSection
