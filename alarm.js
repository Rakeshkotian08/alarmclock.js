
var sound = new Audio("https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3");
		sound.loop = true;
function addZero(time) {
return (time < 10) ? "0" + time : time;
}

       var h2 = document.getElementById('clock');
       var currentTime = setInterval(function(){
       var date = new Date();
       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();
       var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
       h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) +"" + ampm;
	
},1000);


function setAlarm(sa)
{
  let a= document.querySelector('#hour').value;
  const b= document.querySelector('#min').value;
  const c= document.querySelector('#sec').value;
  var e = document.getElementById("ampm");
  var strUser = e.options[e.selectedIndex].text;
  console.log(strUser);

  if(a<12 && strUser=="PM")
{a=parseInt(a)+12;console.log(a);}

  var h2 = document.getElementById('clock');
  var alarmTime=h2.textContent = addZero(a) + ":" + addZero(b) + ":" + addZero(c) + "" + strUser;
 console.log(alarmTime);
    
   setInterval(function(){
        
        var h3 = document.getElementById('clock');
	var date = new Date();
	var hours = date.getHours();
        var minutes = date.getMinutes();
	var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
	var currentTime = h3.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" +ampm;
        if(alarmTime==currentTime)
	{sound.play();}
      
    },1000);
}
function stopAlarm(sta)
{

sound.pause();

}



