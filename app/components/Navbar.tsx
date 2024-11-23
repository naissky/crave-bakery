import NavLinks from "./ui/NavLinks"

export default function Navbar(){
    return (
        <nav className="z-50 w-full text-foreground sticky top-0 left-0">
            <div className="flex flex-row py-5 md:px-10 md:py-10 justify-center items-center md:justify-between">
                <p className="text-xs hidden md:flex max-w-48">
                    VISUAL BRAND DESIGN / ART DIRECTION: LEANDRA RANGEL
                </p>
                <NavLinks/>
                <p className="text-xs hidden md:flex max-w-48">
                    2024 CRAVE / COFFE SHOP & BAKERY
                </p>
            </div>
        </nav>
    )
}