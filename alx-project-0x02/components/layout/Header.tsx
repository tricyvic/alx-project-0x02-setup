import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-between bg-blue-500 p-4 w-full">
            <nav className="flex space-x-4">
                <Link href="/home" className="text-white hover:text-blue-200">
                    Home
                </Link>
                <Link href="/about" className="text-white hover:text-blue-200">
                    About
                </Link>
            </nav>
        </div>
    )
}