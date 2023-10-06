import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import  Typewriter  from 'typewriter-effect'
import {BsArrowUpRight,  BsChevronDown} from 'react-icons/bs'
import me from '../assets/image-removebg-preview (1).png'
const Home = () => {
    const clientCount = useRef(null)
    const projectsCount = useRef(null)
    const animationClientsCount =()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed())
        })
    }
    const animationProjectsCount =()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>(projectsCount.current.textContent=v.toFixed())
        })
    }
    const animation ={
        h1:{
            initial:{x:"-100%",opacity:0},
            whileInView:{x:'0%',opacity:1},
        },
        button:{
            initial:{y:"-100%",opacity:0},
            whileInView:{y:'0%',opacity:1},
        }

    }
  return (
    <div id='home'>
        <section>
            <div>
            <motion.h1 {...animation.h1} >
                Hi, I am <br />Khushi
            </motion.h1>
            <Typewriter options={{
                strings:['A developer','A Designer','A Creator'],
                autoStart:true,
                loop:true,
                cursor:'',
                wrapperClassName:'typewirterpara'
                
            }}/>
            <div className='hireme'>
                <a href="mailto:nagar.khushi2001@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight /></a>
            </div>
            </div>
<article>
    <p>+ <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span></p>
    <span>Clients Worldwide</span>
</article>
<aside>
<article>
    <p>+ <motion.span whileInView={animationProjectsCount} ref={projectsCount}></motion.span></p>
    <span>Projects Done</span>
</article>
<article data-special>
    <p>Contact</p>
    <span>nagar.khushi2001@gmail.com</span>
</article>
</aside>
</section>
        <section className='section-img'>
            <img src={me} alt='khushi'/> 
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home