
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

/* 2-53-44 закончил видео смотреть  */


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio, 
                quia enim libero vitae ut sed quod doloremque accusamus ullam!
                </p>
                <div className="footer_social">
                    <a href="https://linkedin.com" target='_blank' rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://facebook.com" target='_blank' rel="noreferrer noopener"><FaFacebook/></a>
                    <a href="https://twitter.com" target='_blank' rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target='_blank' rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
        </div>
        <article></article>
    </footer>
  )
}

export default Footer