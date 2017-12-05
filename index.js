
	// ===========index2.html ==========================//


	// ===========index.html ==========================//
// function add(){
// 	var n = document.getElementById("box0").value;
// 	var ul3 = document.getElementById("li");
// 	var li = "<li>"+n+"</li>";
// 	ul3.innerHTML+=li;
// }
function add1(){
var n = document.getElementById("box20").value;	
var x=document.createElement("h1");
// var li = "<h2>"+n+"</h2>";
x.innerHTML=n;
document.getElementById("divadd0").appendChild(x);
}
// function add2(){
// 	var b = document.createElement("li");
// 	b.innerHTML='Hello';
// 	document.getElementById('divadd2').appendChild(b);
// }
// var button = document.getElementById("btn");
// button.addEventListener('mouseout',runEvent);
// function runEvent(x){
// 	console.log(x.type);
// 	console.log('X:'+x.offsetX);
// 	console.log('Y:'+x.offsetY);

// }
var button = document.getElementById("btn");
button.addEventListener('mouseleave',runEven);
function runEven(b){
	// console.log(x.type);
	// console.log('X:'+x.offsetX);
	// console.log('Y:'+x.offsetY);
var xy = document.getElementById('divadd1');
xy.innerHTML = 'X='+b.offsetX +'<br>'+'Y='+b.offsetY;
}
var button = document.getElementById("btn");
button.addEventListener('mouseenter',runEvent);
function runEvent(x){
	// console.log(x.type);
	// console.log('X:'+x.offsetX);
	// console.log('Y:'+x.offsetY);
var xy = document.getElementById('divadd2');
xy.innerHTML ='X='+x.offsetX +'<br>'+ 'Y='+x.offsetY;
}
var button = document.getElementById("btn");
button.addEventListener('mousemove',runEvents);
function runEvents(e){
	// console.log(x.type);
	// console.log('X:'+x.offsetX);
	// console.log('Y:'+x.offsetY);
var xy = document.getElementById('divadd3');
xy.innerHTML = 'X='+e.offsetX +'<br>'+'Y='+e.offsetY;

}