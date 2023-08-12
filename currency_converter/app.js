const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');


const eu_convet_button = document.querySelector('#eu');
const usd_convet_button = document.querySelector('#usa');
const gbp_convet_button = document.querySelector('#uk');
const jpy_convet_button = document.querySelector('#jpn');


const currency_symboy= document.querySelector('#currency');


let calculation = [];
let result;
let eu;
let usd;
let gbp;
let jpy;


var requestURL = 'https://api.exchangerate.host/latest';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
 
request.onload = function() {
  var response = request.response;
  

  eur = response.rates.EUR;
  usd = response.rates.USD;
  gpb = response.rates.GBP;
  jpy = response.rates.JPY
 
}



function calculate(button) {
  const value = button.textContent;

  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.textContent = '0';
  
  } else {
    calculation.push(value);
    result = calculation.join('');
    screenDisplay.textContent = result;
  }
}

function eu_convert(rate){
  screenDisplay.textContent='€ '+rate*eur.toFixed(3);
  
}

function usd_convert(rate){
  screenDisplay.textContent="$ "+ rate*usd.toFixed(3);
  
}

function gpb_convert(rate){
  screenDisplay.textContent="£ "+ rate*gpb.toFixed(3);
  
}

function jpy_convert(rate){
  screenDisplay.textContent="¥ "+ rate*jpy.toFixed(3);
  
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
eu_convet_button.addEventListener('click', () => eu_convert(Number(screenDisplay.textContent)) );
usd_convet_button.addEventListener('click', () => usd_convert(Number(screenDisplay.textContent)) );
gbp_convet_button.addEventListener('click', () => gpb_convert(Number(screenDisplay.textContent)) );
jpy_convet_button.addEventListener('click', () => jpy_convert(Number(screenDisplay.textContent)) );
