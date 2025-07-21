import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Link href={"/about"}>About</Link><br />
        <Link href={"/home"}>Home</Link><br />
        <Link href={"/posts"} ></Link>
    </div>
  )
}

export default Header