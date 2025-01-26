import React from 'react'
import Aboutaspage from "../assets/Aboutaspage.jpg"
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${Aboutaspage})` }}></div>
        <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quisquam doloribus recusandae ab sint necessitatibus reiciendis iusto porro voluptates? Distinctio sequi molestias eius omnis nemo illo. Quod aut fugiat doloribus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus ea, rem dicta, doloremque harum nisi, voluptates repudiandae dolorum reprehenderit excepturi quos recusandae eos nesciunt eligendi? Iusto, delectus minus. Similique.</p>
        </div>
    </div>
  )
}

export default About