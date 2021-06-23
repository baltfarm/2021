/*var number = 5*2-2,
message = "Hellow!",
string=true,
x=y=1;
x++;
y+=x;
string=-string;
*/
//confirm('first');//вывод окна с 2 кнопками
/*
var age=prompt("Эсколько вам лет"),
ear = prompt("Какой год");
if (ear==2016){
alert (age+" " + message +" " + number +" "+y +" "+x);//первая строка
}
else if (ear>2018){
alert("Поздно");
}
else{
	alert ("Неверно");
}
*/
/*
var company=prompt("Какая компания?", '');
(company=="fox") ?
alert("Верно"):
alert("No");
*/
/*
while (number<10)
{
	alert(number);
	number++;
}
*/
/*
do{
alert(number);
number++;
}
while(number<10)
*/
/*
for(;x<10;x++)
{
	if(x==6) continue;
	y=prompt("введите число");
	if(y==5) break;
    y++;
	alert(y+" "+x);
}
*//*
var words = ["one", "two", "three", "four"];
words[1]="two2";
eat(words);

alert(words.length);
alert(words);


function eat(words1)
{
words1.pop();
words.push("five1");
}
*/
/*
var name = "Миша, Катя, Оля";
var arr = name.split(', ');
for (var i=0; i<arr.length; i++)
{
alert('Вам сообщение' + " " + arr[i]);
}

//alert(arr.join(""));
arr.splice(0, 0, "Гена");
alert(arr);
arr.reverse();
alert(arr);
var newArr=arr.concat("Фёдор", "Саша");
alert(newArr);
*/
/*
function showMessage()
{
	var message={
	"hi":"Привет",
	"number":2,
	"friends": 12
};
	alert(message["number"]);
};

showMessage();
function calcDisc(a,b,c)
{
	return b*b-4*a*c;
}
var test=calcDisc(4,2,1);
alert(test);
 */
 /*
 var player = {
 	12:"Ivan",
 	13:"Fiodor",
 	15:"Serj"
 };
 player [14] = "Denis";
 delete player.
 var favorite = 14;
 alert(player[favorite]);
 */
/*
var menu = {
	width: 400,
	height: 500,
	title: "menu"
};
var counter = 0;
for (var key in menu){
	alert("key: "+ key + " Значение: "+ menu[key]);
	counter++;
}
alert(counter);
*/
/*
var now = new Date(2013,1,28);
now.setDate(now.getDate()+2);


alert(now);
*/
/*
var element = document.getElementsByTagName('header')
console.log(element);
*/
/*
var divs = document.getElementsByTagName('div');
var links = document.getElementsByClassName('header');
console.log("tag name" + divs);
console.log('class' + links);
*/

/*var el_1 = document.getElementById('some-block');
var el_2 = document.getElementsByTagName('div');

function changeSingle(element){
	element.innerHTML = 'Here is some';
}
function changeCollection(element){
	for (var i = 0; i < element.length; i++){
		element[i].innerHTML = 'We all changed'+i;
	}
}
function changeColor()
{
var element = document.getElementById('link1');
element.href = 'mail.ru';
element.style.color = 'red';
element.style.background = 'blue';
}*/

/*function funOne()
{
	var radio = document.getElementsByName('radioButton');
	var contentText = document.getElementById('content');
	for (var i=0; i < radio.length; i++)
	{
		if(radio[i].checked)
		{
			alert('Выбран' + (i+1) + 'элемент');
			contentText.innerHTML = 'Выбран ' + (i+1) + ' элемент';
		}

	}
}*/
/*
function index()
{
	var select = document.getElementById('mySelect').selectedIndex;
	var option = document.getElementById('mySelect');
	alert('Vibrana opciy ' + option[select].text);
}*/

/*function rangeValue()
{
	var rangeValue = document.getElementById('range');
	var one = document.getElementById("valueRange");
	var div = document.getElementById('divTest');
	one.value = rangeValue.value;
	div.style.width = rangeValue.value+'px';
}*/

/*function angles()
{
var rtl = document.getElementById('rtl').value;
var ttl = document.getElementById('ttl');
var rtr = document.getElementById('rtr').value;
var ttr = document.getElementById('ttr');
var rbl = document.getElementById('rbl').value;
var tbl = document.getElementById('tbl');
var rbr = document.getElementById('rbr').value;
var tbr = document.getElementById('tbr');
var block = document.getElementById('block');
ttl.value = rtl;
ttr.value = rtr;
tbl.value = rbl;
tbr.value = rbr;
block.style.borderRadius = rtl + 'px '+ rtr + 'px '+ rbr + 'px '+ rbl + 'px ';
}*/

/*document.getElementById('nav').onmouseover = function(event)
{
	var target = event.target;
	if(target.className == 'menu-item')
	{
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display = 'block';
	}
}

document.onmouseover = function(event) 
{
	var target = event.target;
	console.log(event.target);
	if (target.className != 'menu-item' && target.className != 'submenu')
	{
		closeMenu();
	}
}

function closeMenu()
{
	var submenu = document.getElementsByClassName('submenu');
	for (var i=0; i<submenu.length; i++)
	{
		submenu[i].style.display = "none";
	}
}*/

/*
var modal=document.getElementById('myModal');
var btn = document.getElementById('myButton');
var span = document.getElementById('close');

btn.onclick = function() {
	modal.style.display = 'block';
}

span.onclick = function() {
	modal.style.display = 'none';
}

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = 'none';
	}
}*/
/*
function myMove()
{
	console.log = "start";
	var block = document.getElementById('myAnimation');
	var container = document.getElementById('myContainer');
	var range = document.getElementById('range').value;
	var pos = 0;
	var id = setInterval(frame, 500/range);
	function frame()
	{

		if(pos >= (container.offsetHeight-block.offsetHeight))
		{

			clearInterval(id);
		}
		else
		{
			pos++;
			
			block.style.top = pos+"px";
		    block.style.left = pos+"px";
		}
	}	
}*/

/*var slideIndex = 1;
showSlides(slideIndex);

function turnSlide(n)
{
	showSlides(slideIndex+=n);
}
function currentSlide(n)
{
	showSlides(slideIndex=n);
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (n>slides.length)
	{
		slideIndex = 1;
	}
	if (n<1)
	{
		slideIndex = slides.length;

	}

	for(i=0; i<slides.length; i++)
	{
		slides[i].style.display = "none";

	}
	for (i=0;i<dots.length;i++)
	{
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className = "active";
}*/

/*var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function()
{
	modal.style.display = "block";
	this.style.display = "none";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function()
{
	modal.style.display = "none";
	img.style.display = "block";
}
modal.onclick = function(event)
{
var target = event.target;

if(target.className!="modal-content")
{
	modal.style.display = "none";
	img.style.display = "block";
}
}*/
/*
	var power = document.getElementById("power");
	var lable = document.getElementById("lable");
	var range = document.getElementById("range");
	var w = power.offsetWidth;
	range.onchange = function ()
{
	var i = range.value;
	var id = setInterval(frame, 10);
	function frame() 
	{
		if(i==w)
		{
			clearInterval(id);
		}
		if(i>w)
		{
			w++;
			power.style.width = w+"px";
			lable.innerHTML = w;
		}
			if(i<w)
		{
			w--;
			power.style.width = w+"px";
			lable.innerHTML = w;
		}
	}					
}
*/

/*
var myNodelist = document.getElementsByTagName('li');
for(var i=0; i < myNodelist.length; i++){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00d7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
cross();

var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);
document.getElementById("newElement").onclick = function () 
{
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === '') {
		alert("Поле не может быть пустым");
	}else{
		document.getElementById("myUl").appendChild(li);
	}
	document.getElementById("myInput").value = "";
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00d7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	cross();
}

function cross()
{
	for(var i=0; i < close.length; i++)
	{
		close[i].onclick = function () 
		{
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

document.getElementById("alertbutton").onclick = function()
{
	var x = document.getElementById("alertwindow");
	console.log("x= "+x.style.display);
	if (x.style.display === 'none')
	{
		alert("none");
		x.style.display = 'block';
	}
	else
		{
			alert("block");
			x.style.display  = 'none';
		}
}
document.getElementById("closebtn").onclick = function()
{
	var x = document.getElementById("alertwindow").style.display = "none";
}
*/

// $("h1").css("color","red");
// document.getElementById("hOne").style.color = 'red';
/*$(document).ready(function(){
	$("h1").css("color","red");
}
);*/
/*$(function(){
	$("h1").css("color","red");
}
);*/

/*

$('#btnStart').click(function()
{
	$('#message')
	.html("Привет")
	.css("background-color", "green")
	.parent()
	.css("background-color", "fff4dd")
	.width(150)
	.height(80)
});
$('#btnReset').click(function()
{
	location.reload()
});*/

// $("#content").css("color", "red");
// $(".wrapper").css("color", "red")
/*$("h1, h2").css("color","green")
$("article h2").css("color", "red")
$("article").find("h2").css("color", "blue")
$("h1+p").css("color", "orange")*/
/*$("#content").prev().css("color", "grey")
$("#content").next().css("color", "grey")
$("*").css("color", "orange")
$("article > h2").css("color", "red")*/
// $("#content").find("p.text").css("color", "red")
/*var $content = $("#content")
$content.find("p.text").css("color", "red")
                       .css("background-color", "green")*/

/*
$(".text").css({
	'color':'red',
	'margin-top':'10px',
	'font-size':'16px'})
*/

/*
$(".text").css({
	color:'green',
	marginTop:'10px',
	fontSize:'16px',
	borderStyle:'solid'
})

$("#content").addClass('name')

$("#content").removeClass('name')
$("#content").toggle()
$("#content").toggle()
$("img").attr('src', '/img/default.jpg')
$("a #my").attr({
	'href':'#',
	'title':'web'
})
*/
/*
$("a").click(function(event) {
	alert('hello!');
	event.preventDefault();
	event.stopPropagation();
	return false;
});  
*/
/*
$("#quantity").keyup(function(){
	var Value = $(this).val();
	$('#msg').text(Value);
})*/
/*$(".anim").click(function(){
	$(this).hide(1000);
	$(this).show(1000,function(){alert("hello");});
	})*/

/*$(".anim").animate({
'opacity':'hide'})*/

/*$(".anim").animate({
'opacity': 0.5,
'height': '+=50px',
'width': '+=250px'
})*/

/*$(".anim").animate({
'height': '+=50px'})
          .animate({
'width': '+=250px'})
*/

/*jQuery.fx.off = true; // отключение всей анимации */

/*$(".anim").animate({
'height': '+=50px'}).stop()
          .animate({
'width': '+=250px'});

        */

/*var $myDiv = $('<div id="my" class="page"> Hello </div>').appendTo('#content');
var $myDiv1 = $('<div>Hello</div>').attr({'id':'my', 'class':'page'}).appendTo('#content');
$("p").after("<hr/>")*/
/*$("<hr/>").insertAfter('p')*/
/*$("<hr/>").insertBefore('p')
$("p").append("<br/><span>","hello","</span>")
$("<p>HELLO</p>").appendTo("#content")*/

/*$(".second").replaceWith("<h2> New text </h2>");
$("<h2> New text </h2>").replaceAll(".inner");*/
/*$(".inner").wrap('<div class="extra-wrapper">Good text</div>')*/
/*$(".inner").wrapInner('<div class="extra-wrapper">Good text</div>')
*/
/*$(".first").clone().appendTo(".second")*/

/*var p;
$("button").click(function(){
	if(p){
		p.appendTo('header');
		p = null;
	} else {
		p = $(".hello").detach();
	}
})*/

$(".first").remove() 