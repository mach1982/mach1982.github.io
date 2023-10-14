import './style.css';



document.querySelector('#app').innerHTML = `
<div>
      <textarea id="textArea">
      
      </textarea>
  </div>
    
    
    <div class="topRow">
      <input id="q" type="button" value="q">
      <input id="w" type="button" value="w">
      <input id="e" type="button" value="e">
      <input id="r" type="button" value="r">
      <input id="t" type="button" value="t">
      <input id="y" type="button" value="y">
      <input id="u" type="button" value="u">
      <input id="i" type="button" value="i">
      <input id="o" type="button" value="o">
      <input id="p" type="button" value="p">

    </div>
    
    <div class="homeRow">
      <input id="a" type="button" value="a">
      <input id="s" type="button" value="s">
      <input id="d" type="button" value="d">
      <input id="f" type="button" value="f">
      <input id="g" type="button" value="g">
      <input id="h" type="button" value="h">
      <input id="j" type="button" value="j">
      <input id="k" type="button" value="k">
      <input id="l" type="button" value="l">
      <input id="semi-co" type="button" value=";">
    </div>

    <div class="bottomRow">
      <input id="z" type="button" value="z">
      <input id="x" type="button" value="x">
      <input id="c" type="button" value="c">
      <input id="v" type="button" value="v">
      <input id="b" type="button" value="b">
      <input id="n" type="button" value="n">
      <input id="m" type="button" value="m">
      <input id="comma" type="button" value=",">
      <input id="fs" type="button" value=".">
      <input id="bs" type="button" value="/">
    </div>

    <div>
    <input id="space" type="button" value=" ">
    </div>

`

//To Do: Add uppercase keys
  let text = document.getElementById("textArea");
  let buttonQ = document.getElementById("q");
  let buttonW = document.getElementById("w");
  let buttonE = document.getElementById("e");
  let buttonR = document.getElementById("r");
  let buttonT = document.getElementById("t");
  let buttonY = document.getElementById("y");
  let buttonU = document.getElementById("u");
  let buttonI = document.getElementById("i");
  let buttonO = document.getElementById("o");
  let buttonP = document.getElementById("p");

  let buttonA = document.getElementById("a");
  let buttonS = document.getElementById("s");
  let buttonD = document.getElementById("d");
  let buttonF = document.getElementById("f");
  let buttonG = document.getElementById("g");
  let buttonH = document.getElementById("h");
  let buttonJ = document.getElementById("j");
  let buttonK = document.getElementById("k");
  let buttonL = document.getElementById("l");
  let buttonSC = document.getElementById("semi-co");

  let buttonZ = document.getElementById("z");
  let buttonX = document.getElementById("x");
  let buttonC = document.getElementById("c");
  let buttonV = document.getElementById("v");
  let buttonB = document.getElementById("b");
  let buttonN = document.getElementById("n");
  let buttonM = document.getElementById("m");
  let buttonComma = document.getElementById("comma");
  let buttonFS = document.getElementById("fs");
  let buttonBS = document.getElementById("bs");

  let buttonSpace = document.getElementById("space");
  text.value ="";

  function handleClick(event) {
    if (event.type === "click") {
      console.log(event.target.value);
      text.value += event.target.value;
    }
    
}


  
   buttonQ.addEventListener('click', handleClick);
   buttonW.addEventListener('click', handleClick);
   buttonE.addEventListener('click', handleClick);
   buttonR.addEventListener('click', handleClick);
   buttonT.addEventListener('click', handleClick);
   buttonY.addEventListener('click', handleClick);
   buttonU.addEventListener('click', handleClick);
   buttonI.addEventListener('click', handleClick);
   buttonO.addEventListener('click', handleClick);
   buttonP.addEventListener('click', handleClick)


   buttonA.addEventListener('click', handleClick);
   buttonS.addEventListener('click', handleClick);
   buttonD.addEventListener('click', handleClick);
   buttonF.addEventListener('click', handleClick);
   buttonG.addEventListener('click', handleClick);
   buttonH.addEventListener('click', handleClick);
   buttonJ.addEventListener('click', handleClick);
   buttonK.addEventListener('click', handleClick);
   buttonL.addEventListener('click', handleClick);
   buttonSC.addEventListener('click', handleClick);
 

   buttonZ.addEventListener('click', handleClick);
   buttonX.addEventListener('click', handleClick);
   buttonC.addEventListener('click', handleClick);
   buttonV.addEventListener('click', handleClick);
   buttonV.addEventListener('click', handleClick);
   buttonB.addEventListener('click', handleClick);
   buttonN.addEventListener('click', handleClick);
   buttonM.addEventListener('click', handleClick);
   buttonComma.addEventListener('click', handleClick);
   buttonFS.addEventListener('click', handleClick);
   buttonBS.addEventListener('click', handleClick);

   buttonSpace.addEventListener('click', handleClick);
  


  
  
 






