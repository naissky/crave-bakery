import { Link } from 'next-view-transitions'

export default function NavLinks(){
    return(
        <div className="flex flex-row">
            <ul className="flex flex-row px-5 md:px-20 py-5 items-center justify-center gap-5 md:gap-10 rounded-xl shadow-lg">
                <li><Link href="/" className="hover:underline md:text-xl font-semibold">Home</Link></li>
                <li><Link href="/about" className="hover:underline md:text-xl font-semibold">About</Link></li>
                <li><Link href="/menu" className="hover:underline md:text-xl font-semibold">Menu</Link></li>
                <li><Link href="/contact" className="hover:underline md:text-xl font-semibold">Contact</Link></li>
            </ul>
        </div>
    )
}