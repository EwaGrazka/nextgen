import "./Header.scss";
import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';
import Menu from "../Menu/Menu";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import { useEffect } from "react";

function Header({ isNight, setIsNight, isScroll }) {

    return <div style={{ borderBottom: isScroll ? (isNight ? '1px solid #23b213' : '1px solid #08C3D5') : null }} className={isNight ? "header-container-n" : "header-container"} >
        <img src={isNight ? logoW : logoB} className='header-logo' alt='logo nextgen' />
        <div>
            <Menu isNight={isNight} />
            <ModeToggle isNight={isNight} setIsNight={setIsNight} />
            <LanguageToggle isNight={isNight} />
        </div>

    </ div>
}

export default Header;
