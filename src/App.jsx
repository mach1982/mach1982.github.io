import React from 'react'
import './App.css'
import Projects from './Projects';
import Contact from './Contact';
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
          <a href='https://github.com/mach1982/'>GitHub</a>
        </nav>
      </header>

    <main>
      <section id='about'>
        <h2>About Me</h2>
        <p>Hey there! I've been in IT support for over a decade, and now I'm transitioning  into the fascinating world of web development. I've always had a thing for programming, especially when it comes to web development. Cybersecurity is another passion of mine. Landing a role at a top cybersecurity firm about two years ago was a huge win for me – it was a longstanding goal. However, it turned out not to be the perfect fit.I've come to realize that my heart truly lies in web development, so I'm transitioning cybersecurity into more of a hobby than a full-time career . I'm well-versed in frontend development technologies like HTML, CSS, JavaScript, Bootstrap, and React. Check out some of the projects I've worked on below, or if you're interested, you can peek at the source code on my GitHub. </p>
        
      </section>

      <h4>The primary purpose of this site is to showcase my projects. As I continue learning, I'll be updating regularly, which might lead to things breaking. If you find something not working, please don't hesitate to <a href='#contact'>contact me</a> </h4>

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
            description ="A basic JavaScript Currency Converter basic CSS styling.(Need to update as API has stop working)"
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
        <Contact />
       
      </section>


    </main>

    <footer>
      <p>&copy; {currentYear} Ailin Mac Hugh</p>

    </footer>
  
  
  </div>
  )
}

export default App
