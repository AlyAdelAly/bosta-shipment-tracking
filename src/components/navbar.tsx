import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import logo from '../assets/bosta_logo.svg';



const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mr-30 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                className="p-1 font-medium text-md text-neutral-900"
            >
                 {t('Home')}
            </Typography>
            <Typography
                className="p-1 font-medium text-md text-neutral-900"
            >
                 {t('Pricing')}
            </Typography>
            <Typography
                className="p-1 font-medium text-md text-neutral-900"
            >
                 {t('Contact Sale')}
            </Typography>
            <Typography
                className="p-1 font-extrabold text-md text-red-600"
            >
                 {t('Tracking Shipment')}
            </Typography>
            <Typography
                className="p-1 font-medium text-md text-neutral-900"
            >
                 {t('Sign In')}
            </Typography>
            <button
                onClick={() => {
                    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
                  }}
                className="p-1 text-md text-red-600 font-bold"
            >
                {t('lang')}
            </button>
        </ul>
    );

    return (
        <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 text-slate-700 rounded-none">
            <div className=" mx-auto flex items-center justify-between">

                <img alt={'logo'} src={logo} />
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    className="pb-7 h-6 w-6 text-justify hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default NavBar;