function eql() {
var x = Number(document.getElementById("value1").value);
var y = Number(document.getElementById("value2").value);
var z = x-y;
document.getElementById("result").innerHTML= z;
document.getElementById("value1").style.backgroundColor="#369";
document.getElementById("value2").style.backgroundColor="#369";
}
function f1(){
document.getElementsByClassName("box-0")[0].style.backgroundColor="red";
document.getElementsByClassName("box-0")[0].style.width="600px";
document.getElementsByClassName("box-0")[0].style.margin= "0 auto"
}
function f2(){
	document.getElementsByClassName("box-1")[0].style.backgroundColor="#369";
	document.getElementsByClassName("box-1")[1].style.margin= "0 auto"
	document.getElementsByClassName("box-1")[1].style.backgroundColor="green";
}
function f3(){
f1();
f2();
}
 function f5(){
 var y = document.getElementById('data').value;
 var x = document.createElement('li');
 var li ="<li"+y+"/li>"
 x.innerHTML=y;
 document.getElementById("ulli").appendChild(x);
}
