import "./Header.scss";
import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';


function Header({ night, setNight }) {

    return <div className={night ? "header-container-n" : "header-container"} >

        <img src={night ? logoW : logoB} className='header-logo' alt='logo nextgen' />
        <button onClick={() => setNight(!night)}>{night ? 'Night' : 'Day'}</button>
    </ div>
}

export default Header;
