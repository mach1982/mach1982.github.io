import React from 'react'
import './App.css'
import Projects from './Projects';
import caljs from './images/caljs.png'
import cc from './images/cc.png'
import carmate from './images/carmate.png'
import weatherapp from './images/weather-app.png'
import tasks from './images/task-app.png'
import vk from './images/virtual_keyboard.png'
import xo from './images/xando.png'
import hogwarts from './images/hogwarts-students.png'


const date = new Date();
const currentYear =date.getFullYear()

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Ailin MacHugh </h1>
        <h3>Web Development Portfolio</h3>
        
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact Me</a>
          <a href='#'>Git-Hub</a>
        </nav>
      </header>

    <main>
      <section id='about'>
        <h2>About Me</h2>
        <p>I am IT professional with over 10 years of experience in IT support, seeking to transition into Web development. am passionate about programming, especially for web development, and Cybersecurity. Four years ago I set a goal of getting a job in Cybersecurity before I turned 40. I achieved that goal but realised I was not suited to it and my true passion lies in programming and web development. </p>
        <p>I have a good understanding of HTML5, JavaScript, and CSS. I'm currently doing a frontend development course leaning how use frameworks like Bootstrap, and React.js. This page is written in React. </p>
        <p>I am interested in working on web development projects that are user-friendly and visually appealing Below you will find some some of my projects:</p>
      </section>

      <section id='projects'>
        
        <h2>Projects</h2>
        
        <div className="project-card">
          <Projects 
            name ="JavaScript Calculator"
            description ="A basic JavaScript calculator with basic CSS styling"
            url ="https://mach1982.github.io/caljs/"
            img ={caljs}
          />
          <Projects 
            name ="Currency Converter"
            description ="A basic JavaScript Currency Converter basic CSS styling"
            url ="https://mach1982.github.io/currency_converter/"
            img ={cc}
          />

          <Projects 
            name ="Car Mate"
            description ="JavaScript application for saving important information about your car"
            url ="https://mach1982.github.io/car_mate/"
            img ={carmate}
          />

          <Projects 
            name ="Weather App"
            description ="JavaScript weather App using the weatherapi.com API "
            url ="https://mach1982.github.io/weather-app/"
            img ={weatherapp}
          />

          <Projects 
            name ="Tasks App"
            description ="JavaScript Task App "
            url ="https://mach1982.github.io/tasks/"
            img ={tasks}
          />

          <Projects 
            name ="Virtual Keyboard"
            description ="JavaScript Virtual Keyboard"
            url ="https://mach1982.github.io/virtual_keyboard/"
            img ={vk}
          />

            <Projects 
            name ="React Tic-Tac-Toe"
            description ="Tic-tac-toe Xs/Os written in react, based on a tutorial by Ania Kubów "
            url ="https://mach1982.github.io/tic-tac-toe-react/"
            img ={xo}
          />

            <Projects 
            name ="Hogwarts Contacts"
            description ="A dynamic Contacts list written in React . Demonstrating understating of props "
            url ="https://mach1982.github.io/hogwarts-conatcs"
            img ={hogwarts}
          />
          {/* <h3>Java Script Calculator</h3>
          <p> A basic JavaScript calculator with basic CSS styling</p>
          <a href='#'><img src={caljs} alt="JavaScript Calculator" /></a> */}
        </div>
      </section>

      <section id='contact'>
        <h2>Contact me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>

          <button type="submit">Send message</button>
        </form>
      </section>


    </main>

    <footer>
      <p>&copy; {currentYear} Ailin Mac Hugh</p>

    </footer>
  
  
  </div>
  )
}

export default App
