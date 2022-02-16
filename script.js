var str = prompt("When have you born,as show example 30.06.1993"); 

var birthDate = new Date(str.replace(/^(\d+)\.(\d+).(\d+)$/, "$3-$2-$1"));
 
var currentDate = new Date();  

 alert( Math.floor( (currentDate - birthDate) / 1000 / 60 / 60 / 24)+" "+ "days" ); 