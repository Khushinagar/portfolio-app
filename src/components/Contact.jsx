import React from 'react'
import { useState } from 'react'
import vg from '../assets/1.jpeg'
import toast from 'react-hot-toast'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../firebase'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disableBtn, setDisableBtn] = useState(false)
  const submitHandeler = async (e) =>{
    e.preventDefault();
    setDisableBtn(true);
   try {
    await addDoc(collection(db,"contacts"),{
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Message Sent");
    setDisableBtn(false);
    
   } catch (error) {
     toast.error("Error");
     setDisableBtn(false);
     console.log(error);
   }
  };
  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandeler}>
                <h2>Contact Me</h2>
                <input type='text'
                value={name}  onChange={(e)=>setName(e.target.value)}
                placeholder='your name' required/>
                <input type='email' placeholder='your email' required
                value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text' placeholder='your message' aria-required
                value={message}  onChange={(e)=>setMessage(e.target.value)}/>
                <button type='submit'disabled={disableBtn}
                className={disableBtn?"disableBtn":""}>Send</button>
            </form>
        </section>
        <aside>
            <img src={vg} alt='vector' />
        </aside>
    </div>
  )
}

export default Contact