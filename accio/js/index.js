$(document).ready(function(){

 
  var result;
  

  
  $("#lucky_btn").click(function(){
        window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  
 $("#search_btn").click(function(){
    
    var iDiv = document.createElement('div');
    iDiv.id = 'r';
    document.getElementsByTagName('body')[0].appendChild(iDiv);


// Now create and append to iDiv

    var innerDiv0 = document.createElement('div');
    innerDiv0.id= 'r0';
    innerDiv0.className = 'well';

    var innerDiv1 = document.createElement('div');
    innerDiv1.id= 'r1';
    innerDiv1.className = 'well';

    var innerDiv2 = document.createElement('div');
    innerDiv2.id= 'r2';
    innerDiv2.className = 'well';

    var innerDiv3 = document.createElement('div');
    innerDiv3.id= 'r3';
    innerDiv3.className = 'well';
    
    var innerDiv4 = document.createElement('div');
    innerDiv4.id= 'r4';
    innerDiv4.className = 'well';
    

 // append to it.
iDiv.appendChild(innerDiv0);
iDiv.appendChild(innerDiv1);
iDiv.appendChild(innerDiv2);
iDiv.appendChild(innerDiv3);
iDiv.appendChild(innerDiv4);
   
 //get JSON data 
 $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+$("#input").val()+'&limit=5&format=json&callback=?', function(data){  
     
     /* test code
     console.log(data[0][0]);
     console.log(data[1][0]);
     console.log(data[2][0]);
     console.log(data[3][0]);
     */
     
     result=data[1].length;
     
     
     //enter for loop
    for (var i=0; i<result;i++){
   
      console.log(i);  
    
        $("#r"+i).html(data[1][i]+"<br>"+data[2][i]+"<br>"+"<a href="+data[3][i]+">"+data[3][i]+"<\a> <br> <br>");
     
   }//end for loop
     
   
    });

  });
  
});
