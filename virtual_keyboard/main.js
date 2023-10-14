

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
  


  
  
 






