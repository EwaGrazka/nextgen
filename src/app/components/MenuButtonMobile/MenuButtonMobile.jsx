import "./MenuButtonMobile.scss";


function MenuButtonMobile({ isNight, isMenuOpen, setIsMenuOpen }) {

    return (
        <div className={isNight ? "menu-button-mobile green" : 'menu-button-mobile blue'}>
            <div class="box">
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} class={isMenuOpen ? "btn active" : "btn not-active"}>
                    <span style={{ background: isNight ? '#fff' : '#000' }}></span>
                    <span style={{ background: isNight ? '#fff' : '#000' }}></span>
                    <span style={{ background: isNight ? '#fff' : '#000' }}></span>
                </div>
            </div>
        </ div>
    )
}

export default MenuButtonMobile;
