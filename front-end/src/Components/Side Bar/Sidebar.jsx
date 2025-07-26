import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext'

const Sidebar = () => {
    const {theme} = useContext(ThemeContext)

  return <section className={`${theme=="light"?"bg-gray-800 text-white":"bg-white"} fixed left-0  ease-in-out duration-300 h-[calc(100vh-70px)] w-full flex flex-col gap-3 lg:w-[20%] md:w-[35%] border-r z-50`}>
    <article className=' '>
      <header className='mx-5 my-4 font-semibold text-xl'>
        <h1 className=''>New Chat</h1>
      </header>

      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
    </article>
    
    <article className='overflow-y-auto flex flex-col gap-5'>
      <header className='mx-5 my-4 font-semibold text-xl'>
        <h1>Previous Chats</h1>
      </header>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>
      <button className='border-1 h-[40px] w-[90%] rounded-md mx-5'>
         New chat
      </button>

    </article>
  </section>
}

export default Sidebar
