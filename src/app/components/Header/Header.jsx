import "./Header.scss";
import Menu from "../Menu/Menu";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import { Logo } from "../Logo/Logo";
import MenuButtonMobile from "../MenuButtonMobile/MenuButtonMobile";

function Header({ isNight, setIsNight, isScroll, isMenuOpen, setIsMenuOpen }) {

    return (
        <div style={{
            borderBottom: isScroll ?
                (isNight ? '1px solid #23b213' : '1px solid #08C3D5') : null
        }}
            className={isNight ? "header-container-n" : "header-container"}>

            <Logo isNight={isNight} />
            <div className='header-buttons-wrapper'>
                <Menu isNight={isNight} />
                <ModeToggle isNight={isNight} setIsNight={setIsNight} />
                <LanguageToggle isNight={isNight} />
            </div>
            <MenuButtonMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isNight={isNight} />


        </ div>
    )
}

export default Header;
