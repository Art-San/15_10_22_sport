import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

/* 3-28-00 закончил видео смотреть  */

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto explicabo
        et eveniet. Enim laudantium quae modi, quasi nihil laborum?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eligendi animi 
              dolore consectetur totam necessitatibus maxime eum quisquam aut porro et repellat
              nam consequatur eaque deserunt dolores molestias officiis corrupti a officia dolorem, 
              exercitationem facere numquam. Dignissimos, blanditiis distinctio? Nostrum!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque veritatis 
              sint omnis, voluptatum maxime fugiat reprehenderit dolor quos optio mollitia. 
              Error sit perferendis minus fugit non beatae voluptatum ad!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, architecto. In voluptates reiciendis ad enim.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eligendi animi 
              dolore consectetur totam necessitatibus maxime eum quisquam aut porro et repellat
              nam consequatur eaque deserunt dolores molestias officiis corrupti a officia dolorem, 
              exercitationem facere numquam. Dignissimos, blanditiis distinctio? Nostrum!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque veritatis 
              sint omnis, voluptatum maxime fugiat reprehenderit dolor quos optio mollitia. 
              Error sit perferendis minus fugit non beatae voluptatum ad!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eligendi animi 
              dolore consectetur totam necessitatibus maxime eum quisquam aut porro et repellat
              nam consequatur eaque deserunt dolores molestias officiis corrupti a officia dolorem, 
              exercitationem facere numquam. Dignissimos, blanditiis distinctio? Nostrum!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque veritatis 
              sint omnis, voluptatum maxime fugiat reprehenderit dolor quos optio mollitia. 
              Error sit perferendis minus fugit non beatae voluptatum ad!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque, architecto. In voluptates reiciendis ad enim.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About