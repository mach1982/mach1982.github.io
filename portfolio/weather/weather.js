
$(document).ready(function(){




 //http://openweathermap.org/weather-conditions

 //https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat



// $('.jumbotron').css("background", "url(http://www.familyandhome.org/sites/g/files/g20561/f/clouds.jpg)");



  var country;
  var temp_c;
  var temp_f;
  var city;
  var units="metric";
  var lat;
  var long;
  var icon;
  var weather;

  $.getJSON("http://ip-api.com/json", function(data){
  lat=data.lat;
  long=data.lon;
  city=data.city;


 country=data.countryCode;

     $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=imperial&APPID=64c45a572899067dd41b4e88a80725a5",function(jsonf){

       temp_f=JSON.stringify(jsonf.main.temp);
       //alert(temp_f);

   });



  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&APPID=64c45a572899067dd41b4e88a80725a5",function(json){
    //console.log(lat);
     //console.log(long);

    //temp_c = JSON.stringify(json.main.temp);
    temp_c ==13;
    //console.log(temp_c);





    icon = json.weather[0].icon;
    //alert(icon);


    weather=json.weather[0].description;
    //alert(weather);





     if (weather==="few clouds"||"scattered clouds"||"broken clouds"){

        $('.jumbotron').css("background", "url(cloudy.jpg)",,"background-repeat", "no-repeat");

      }
      


     if (weather==="clear sky"){

       $('.jumbotron').css("background", "url(clear_sky.png)","background-repeat", "no-repeat");
      
     }
     else{
      $('.jumbotron').css("background", "url(cloudy.jpg)");
      
     }


     if (weather==="shower rain"||"	rain"){

       $('.jumbotron').css("background", "background-repeat: no-repeat","url(rainy.jpg)");


     }

     if (weather==="snow"){

       $('.jumbotron').css("background","background-repeat: no-repeat", "url(snow.jpg)");


     }

     if (weather==="thunder"){

       $('.jumbotron').css("background-image","background-repeat: no-repeat", "url(thunder.jpg)");


     }


    var unit="C";
    var temp=temp_c;



    $("#but_f").click(function(){
      unit="F";
      temp =temp_f;
      $("#temp").html(+temp+"       \u00B0"+unit +"\u2003");

    });

    $("#but_c").click(function(){
     temp=temp_c;
     unit="C";
     $("#temp").html(+temp+"       \u00B0"+unit +"\u2003");

    });

 $("#temp").append(+temp+"       \u00B0"+unit +"\u2003");

  var url="http://www.geognos.com/api/en/countries/flag/"+country+".png";
  var icon_url="http://openweathermap.org/img/w/"+icon+".png"



 $("#flag").append('<img src="' + url + '" style="width:90px;height:50px;"/>');

 $("#icon").append('<img src="' + icon_url + '" style="width:90px;height:50px;"/>')

 $("#city").append(city);

    $("#weather").append(weather);




  });


  });
});
