import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

/* 3-40-00 надо заново смотреть  */

const Contact = () => {
  return (
    <>
    <Header title='Get in Touch' image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo consectetur officia maxime ipsum recusandae dolorum sunt, mollitia laborum.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:artsan.mcc@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Contact