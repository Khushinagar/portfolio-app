import React from 'react'
import userImage from '../assets/photo.jpg'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section className='section-testimonial'>
            <TestimonialCard name={"Khushi"} 
            feedback={"yaay you can do it"}/>
            <TestimonialCard name={"sahil"} 
            feedback={"i m so proud of you . "}/>
            <TestimonialCard name={"aish"} 
            feedback={"wow! keep growing"}/>
        </section>
    </div>
  )
}
const TestimonialCard =({name,feedback})=>(
    
    <article className='article-a'>
        <img src={userImage} 
        alt='uesr'/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
    

)
export default Testimonial