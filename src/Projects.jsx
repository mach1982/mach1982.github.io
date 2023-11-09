import React from 'react'


const Projects = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
          <p> {props.description}</p>
          <a href={props.url}><img src={props.img} alt={props.name} /></a>
    </div>
  )
}

export default Projects