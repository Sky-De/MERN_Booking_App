import React from 'react';

import { useState } from "react";
import "./mail.scss";


const Mail = () => {
  const [email,setEmail] = useState("");
  const [showPopUp,setShowPopUp] = useState(false)
  const [isChecked,setIchecked] = useState(false)

  const submitHandler = (e)=> {
    e.preventDefault();
    if(email){
      setEmail('');
      showMessage();
      console.log(isChecked);
      console.log(email);
    }
  }
  
  const showMessage = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 1500);
  }
  const changeHandler = (e) => {
    setEmail(e.target.value)
  }

  const changeMarkCkeck = (e) => {
    setIchecked(e.target.checked)
  }
  return (
    <section className="subscribe">
        <h3 className="subscribe__title">Save time, save money!</h3>
        <p className="subscribe__description">Sign up and we'll send the best deals to you</p>
        <form className="subscribe__form" onSubmit={submitHandler}>
            <div className="inputControl">
                <input type="email" placeholder="Your email" value={email} onChange={changeHandler}/>
                <button type="submit">Subscribe</button>
                {showPopUp && <span className="inputControl__popUp">Thank YOU!</span>}
            </div>
            <div className="subscribe__checkMark">
                <input type="checkbox" id="checkMark" name="checkMark" value={isChecked} onChange={changeMarkCkeck}></input>
                <label htmlFor="checkMark"> Send me a link to get the FREE Boking.com app!</label>
            </div>
        </form>
    </section>
  )
}

export default Mail



