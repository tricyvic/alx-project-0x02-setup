import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex w-full bg-blue-500 h-10 justify-between items-center px-3 text-amber-50'>
        <Link href={"/about"}>About</Link><br />
        <Link href={"/home"}>Home</Link><br />
        <Link href={"/posts"} >Posts</Link>
    </div>
  )
}

export default Header