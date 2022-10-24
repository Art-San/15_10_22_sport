import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
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
            <h1>Our Storu</h1>
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

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
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