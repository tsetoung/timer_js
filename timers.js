var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var clock = window.setInterval('disp()',1000);
//var stop = window.clearInterval(clock);
//var t = setTimeout(add, 1000);

var h=0;
var m=0;
var s=0;

function disp(){
    if(s<10){var s1='0' + s;}
      else{var s1=s;}
    if(m<10){var m1='0' + m;}
      else{var m1=m;}
    if(h<10){var h1='0' + h;}
      else{var h1=h;}
    str= h1 + ':' + m1 +':' + s1;
    document.getElementById('timer').innerHTML=str;
      if(s<59){
        s=s+1;
      } else {
        s=0;
        m=m+1;
      } if(m==60){
          m=0;
          h=h+1;
        }
    }

resetButton.addEventListener("click", function (action) {
  action.preventDefault();
  //window.clearInterval(clock);
  document.getElementById("timer").innerHTML = "Stop Watch"});

startButton.addEventListener("click", function (action) {
  action.preventDefault();
  document.getElementById("timer").innerHTML = ("Time Elapsed: " + clock)});

//pauseButton.onclick = function() {
  //clearTimeout(t);
//};


//TimeCode Not Good

//var h=0;
//var m=0;
//var s=0;

//function disp(){
    //if(s<10){var s1='0' + s;}
      //else{var s1=s;}
    //if(m<10){var m1='0' + m;}
      //else{var m1=m;}
    //if(h<10){var h1='0' + h;}
      //else{var h1=h;}
    //str= h1 + ':' + m1 +':' + s1 ;
//document.getElementById('timer').innerHTML=str;
  //if(s<59){
    //s=s+1;
  //} else {
  //  //s=0;
    //m=m+1;
  //if(m==60){
      //m=0;
      //h=h+1;
    //}
//}
//var clock = window.setInterval('disp',1000);
//var stop = window.clearInterval(clock);
//var startButton = document.getElementById("start");
//var resetButton = document.getElementById("reset");
//var pauseButton = document.getElementById("pause");


//switch(document.getElementByClass('Controls').value)
//{
//case 'reset':
//stop();
//resetButton.addEventListener("click", function (action) {
  //action.preventDefault();
  //document.getElementById("timer").innerHTML = "Stop Watch"
//} );
//break;
//case 'start':
//startButton.addEventListener("click", function (action) {
  //action.preventDefault();
  //document.getElementById("timer").innerHTML = ("Time Elapsed: " + clock())
//} );
//break;
//case 'pause'
//}
