import { Link } from "react-router-dom"
import Image from '../images/main_header.png'




// 1-26-30 закончил видео смотреть (анимация css)

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container"></div>
      <div className="main__header-left">
        <h4>#100DaysOfWorkOut#</h4>
        <h1>Join The Legends Of The Fitness World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Numquam qui deleniti reiciendis magni libero corrupti?
        </p>
        <Link to='/plans' className='btn lg' >Get Started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-circle">персик</div>
        <div className="main__header-image"></div>
        <img src={Image} alt="Main Header" />
      </div>
    </header>
  )
}

export default MainHeader