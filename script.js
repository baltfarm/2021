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

document.getElementById('nav').onmouseover = function(event)
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
}