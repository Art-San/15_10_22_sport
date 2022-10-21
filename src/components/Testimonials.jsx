import { useState } from "react"
import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"


const Testimonials = () => {
    const [index, setIndex] = useState(1)
    const {name, quote, job, avatar}= testimonials[index]
    console.log(name, job, avatar)
  return (
    <section className="tesmonials">
        <div className="container testimonals__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="tesmonial">
                <div className="tesmonial__avatar">
                    <img src={avatar} alt={name}></img>
                </div>
                <p className="tesmonial__quote">{`${quote} `}</p>
                <h5>{name}</h5>
                <small className="tesmonial__title">{job}</small>
            </Card>
            <div className="testimonails__btn-container">
                <button className="testimonials__btn"><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn"><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
    
  )
}

export default Testimonials