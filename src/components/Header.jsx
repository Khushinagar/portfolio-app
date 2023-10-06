import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>
      <NavContent setMenuOpen={setMenuOpen}/>
    </nav>
     <button onClick={()=>setMenuOpen(!menuOpen)} >
     <AiOutlineMenu className='menu-btn'/>
     </button>
     </>
   
  
  )
}
export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}
 const NavContent = ({setMenuOpen}) =>(
  <>
  <h2>Khushi Nagar</h2>
  <div>
    <a onClick={()=>setMenuOpen(false)} href='#home'>Home</a>
    <a onClick={()=>setMenuOpen(false)} href='#work'>work</a>
    <a onClick={()=>setMenuOpen(false)} href='#experience'>Experience</a>
    <a onClick={()=>setMenuOpen(false)} href='#services'>Services</a>
    <a onClick={()=>setMenuOpen(false)} href='#testimonial'>Testimonial</a> 
    <a onClick={()=>setMenuOpen(false)} href='#contact'>Contact</a>
  <a href="mailto:nagar.khushi2001@gmail.com">
    <button className='btn-email'>Email</button>
  </a>
  </div>
  </>
);

export default Header
