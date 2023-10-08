import React from "react";
import './styles.css';
import Details from "./Details";
import Avatar from "./Avatar";


function Card(props){
return(
    <div>
      
      <div className="card">
        <div className="top">
          <h2 className="name"> {props.name}</h2>
          <Avatar 
          img={props.img}
          />
        </div>
        <div className="bottom">
          <Details info={props.house} />
          <Details info={props.wand}/>
        </div>
      </div>
    </div>


);

}

export default Card;