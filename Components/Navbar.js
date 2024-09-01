"use client"
import React, { useState } from 'react'
import { signOut, signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)

  return (
    <nav className='bg-[#020617e3] text-white m-2 flex flex-col md:justify-between md:px-6 md:h-16 h-20 items-center md:flex-row'>
      <Link href={'/'} className="logo font-bold md:text-lg text-xl">GetMeAChai!</Link>

      <div className='relative flex'>
        {session && <> 
          <div>
            <ul className="text-sm text-gray-700 dark:text-gray-200 flex" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" ><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2">Dashboard</button></Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`}><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2">My Page</button></Link>
              </li>
            </ul>
          </div>
        </>}

        <div>
          {session && <Link href={"/login"}> <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }}>Logout</button></Link>}

          {!session && <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >LogIn</button></Link>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
