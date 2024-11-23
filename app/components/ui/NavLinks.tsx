import { Link } from 'next-view-transitions'

export default function NavLinks(){
    return(
        <div className="flex flex-row bg-background rounded-xl">
            <ul className="flex flex-row px-5 md:px-20 py-5 items-center justify-center gap-5 md:gap-10 rounded-xl shadow-lg">
                <li><Link href="/" className="hover:underline md:text-xl font-semibold">Home</Link></li>
                <li><Link href="/about" className="hover:underline md:text-xl font-semibold">About</Link></li>
                <li><Link href="/" className="text-gray-500 md:text-xl font-semibold pointer-events-none">Menu</Link></li>
                <li><Link href="/contact" className="hover:underline md:text-xl font-semibold">Contact</Link></li>
            </ul>
        </div>
    )
}