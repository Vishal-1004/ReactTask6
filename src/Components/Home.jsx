import React from 'react'
import './Home.css'

const spanstyle={
    color:'blue',
    fontWeight:'bolder',
}
const pstyle={
    fontFamily:'"Young Serif", serif',
    display:'flex',
    textAlign:'center',
    justifyContent:'center',
}
const image1='https://picsum.photos/200/300'
const Home = () => {
  return (
    <div id='home'>
      <div id='intro'>
        <div id='si'>
            <h1>Hi, 🙋‍♂️</h1>
            <h1>I am <span style={spanstyle}>Vaibhav Banka 🧑‍💻</span></h1>
        </div>
        <div className="im">
            <img src={image1} alt="" />
        </div>
      </div>
      <div id='about'>
        <p style={pstyle}>I am a pre final year student at Vellore Institute of Technology, Chennai. I have keen interset in the new technologies.I have good academic background and am into web development. I love to listen music in my leisure time. Travelling across various cities is also one of my favourites.</p>
      </div>
    </div>
  )
}

export default Home
