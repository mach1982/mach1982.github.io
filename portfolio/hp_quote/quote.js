var quotes =[];

quotes[0]="Your a Wizaed Harry!-Hagrid";
quotes[1]="But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light -Dumbledore";
quotes[2]="Never trust anything that can think for itself if you can’t see where it keeps its brain - Mr Weasely ";
quotes[3]="It is our choices, Harry, that show what we truly are, far more than our abilities-Dumbledore";
quotes[4]="It matters not what someone is born, but what they grow to be-Dumbledor";
quotes[5]="People find it far easier to forgive others for being wrong than being right-Dumbledore";
quotes[6]="We are only as strong as we are united, as weak as we are divided-Dumbledore";
quotes[7]="Differences of habit and language are nothing at all if our aims are identical and our hearts are open.-Dumbledore";
quotes[8]="Curiosity is not a sin…but we should exercise caution with our curiosity.- Dumbledore";
quotes[9]="Understanding is the first step to acceptance, and only with acceptance can there be recover-Dumbledore";
quotes[10]="Do not pity the dead, Harry, pity the living, and above all those who live without love.-Dumbledore";
quotes[11]="Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it. –Dumbledor";
quotes[12]="What you fear most of all is– fear. Very wise.” –Lupin";
quotes[13]="If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.-Sirus Black"
quotes[14]="Things we lose have a way of coming back to us in the end, if not always in the way we expect.” –Luna Lovegood,";
quotes[15]="We are all human, aren’t we? Every human life is worth the same, and worth saving. –Kingsley Shacklebol";
quotes[16]="The world isn’t split into good people and Death Eaters. We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.-Sirus Black ";
quotes[17]="No good sittin' worryin' abou' it. What's comin' will come, an' we'll meet it when it does! - Hagrid";
quotes[18]="Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?-Dumbledore";
quotes[19]="Mischief Managed-Weasely Twins";

$(document).ready(function(){
  
 var x =Math.floor(Math.random() * 21);
 
    $("#quote-btn").click(function(){
      
     
      
        $("#q").html(quotes[x] );
      
    });
  
 $('#btnTweet').click(function (e) {
 //alert('hello11');
 var textToTweet = quotes[x];
 if (textToTweet.length > 140) {
 alert('Tweet should be less than 140 Chars');
 }
 else {
 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 window.open(twtLink,'_blank');
 }
 });


});
