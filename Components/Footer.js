import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-[#020617e3] text-white flex justify-center px-6 h-16 items-center'>
      <div>
        <p className='text-xs md:text-base'>Copyright &copy; {currentYear} Get Me A Chai | All rights reserved! </p>
      </div>
    </footer>
  )
}

export default Footer
