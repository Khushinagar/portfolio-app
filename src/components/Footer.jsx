import React from 'react'
import footerimg from '../assets/photo.jpg'
import  { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div>
        <img src={footerimg} alt='footer' className='fImage'/>
        <h2>Khushi Nagar</h2>
        <p>Practice makes you perfact</p>
    </div>
    <aside>
        <h2 className='heading-sm'>Social Media</h2>
        <article className='footer-article'>
            <a href=''><AiFillInstagram/></a>
            <a href=''><AiFillLinkedin/></a>
            <a href=''><AiFillGithub/></a>
        </article>
    </aside>
    <a href='#home' className='uparrow'><AiOutlineArrowUp/></a>
   </footer>
  )
}

export default Footer