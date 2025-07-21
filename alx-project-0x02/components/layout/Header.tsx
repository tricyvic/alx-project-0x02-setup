import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Link href={"/about"}>About</Link><br />
        <Link href={"/home"}>Home</Link>
    </div>
  )
}

export default Header