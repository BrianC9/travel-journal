import logo from '../images/logo.png'
import '../styles/Header.css'
export default function Header() {
    return (
        <nav className='Header'>
            <img src={logo} alt='logo' className='Header--logo'/>
            <h1 className='Header--title'>my travel journal</h1>
        </nav>
    )
}