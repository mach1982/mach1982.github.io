

 
 
//const city  = document.getElementById("cityInput").value;


 const city = document.getElementById("cityInput").value;
 const defaultCity ="Dublin";

 


fetch(`https://api.weatherapi.com/v1/current.json?key=1499bed3ace74172a3b215054231109&q=${city}`, { mode: 'cors' })
  .then(function (response) {
    // Check if the response status is OK (200) before attempting to parse the JSON
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This returns a Promise
  })
  .then(function (response) {
    // Now you can work with the parsed JSON data

    

    
    

    console.log(response);
    
    const loc = response.location.name;
    const temp_c = response.current.temp_c;
    const imageIcon = response.current.condition.icon;
    const imageText = response.current.condition.text;

    const h1Element = document.createElement('h1');
    h1Element.innerHTML += `
    
                          ${loc}
                          <br />
                          <br />
                          ${temp_c}\u2103  
                          <br />
                          <br />
                          <img src="${imageIcon}" alt="${imageText}">
                          <br />
                          <br />
                          ${imageText}
                          `;

    const manDiv = document.getElementById('app');
    manDiv.appendChild(h1Element)

   
  })
  .catch(function (error) {
    console.error('There was a problem with the fetch operation:', error);
  });





