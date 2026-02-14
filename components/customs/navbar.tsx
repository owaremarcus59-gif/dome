import LoginBtn from "../general/login"
import { Logo } from "../general/logo"
import SellerLoginBtn from "../general/sellerlogin"
import MobileMenu from "../general/mobilemenu"
import Navlinks from "../general/navlinks"


export const Navbar = () => {
    return (
        <section className="fixed w-full flex items-center justify-between bg-white z-30 px-4 py-2 ">
            {/* 
                -the logo for the app 
                - the navlinks for the app
                - the authentication  buttons
            
            */}
            <Logo />
            <Navlinks/>
            <div className="flex items-center ">
                <LoginBtn 
                name="Login"
                className="text-accentColor text-lg hidden md:flex"
                />
                <SellerLoginBtn
                className="hidden md:flex text-xs" 
                name="Become a Seller"
                />
                <MobileMenu/>
            </div>
        </section>
    )
}