 pos = {
	x:1,
	y:1
}
score=0;
bul=false;
timerId=0;
function createMatrix()
{
	var matrix = document.getElementById('matrix');
	var n = 20 * 20;	
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
}


function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getCell(row, col)
{
	
	if (String(document.getElementById('matrix').children[(row-1)*20+col-1].style.backgroundColor)=="red"){
		setCell(getRandomInt(1,20), getRandomInt(1,20), true);
		score=Number(score)+1;
	}

}


function setCell(row, col, val)
{	var temp=document.getElementById('matrix');
	var num=(row-1)*20+col-1;
	if (val){
	temp.children[num].style.backgroundColor = 'red';
	} else {
	temp.children[num].style.backgroundColor = 'white';  	
	}

}

function setMyCell(row, col)
{	
	
	document.getElementById('matrix').children[(row-1)*20+col-1].style.backgroundColor = 'green';

}

function clearMyCell(row, col)
{	
	
	document.getElementById('matrix').children[(row-1)*20+col-1].style.backgroundColor = 'white';

}

function handler(event) {

var KEY_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}



switch(event.keyCode) {
	
	
 
  case KEY_CODE.LEFT:
 clearInterval(timerId);
  timerId = setInterval(function() { clearMyCell(pos.y, pos.x);
  if(pos.x<=1){
		pos.x=20;
	} else{
		pos.x=Number(pos.x) - 1;
	}
	//getCell(pos.y, pos.x);
	setMyCell(pos.y, pos.x); }, 200);
	
	
    
	
	
  break;
  case KEY_CODE.UP:
 clearInterval(timerId);
  timerId = setInterval(function() {
    clearMyCell(pos.y, pos.x);
    if(pos.y<=1){
		pos.y=20;
	} else{
		pos.y=Number(pos.y) - 1;
	}
	getCell(pos.y, pos.x);
	setMyCell(pos.y, pos.x);}, 200);
	
  break;
  
  case KEY_CODE.RIGHT:
clearInterval(timerId);
  timerId = setInterval(function() {
  clearMyCell(pos.y, pos.x);
    if(pos.x>=20){
		pos.x=1;
	} else{
		pos.x=Number(pos.x) + 1;
	}
	getCell(pos.y, pos.x);
	setMyCell(pos.y, pos.x);}, 200);
	
  break;
  case KEY_CODE.DOWN:
 clearInterval(timerId);
  timerId = setInterval(function() {
    clearMyCell(pos.y, pos.x);
    if(pos.y>=20){
		pos.y=1;
	} else{
		pos.y=Number(pos.y) + 1;
	}
	getCell(pos.y, pos.x);
	setMyCell(pos.y, pos.x);}, 200);
	
	
  break;      

}
}	



window.onload = function()
{
	createMatrix();	
	window.addEventListener('keydown', handler, false);
	setCell(getRandomInt(1,20), getRandomInt(1,20), true);
	setMyCell(1,1);
	alert("game start now "); alert("game start now ");
	alert("game start now "); alert("game start now ");
	//setTimeout(function() { alert("your score is "+score);  location.reload(); }, 10000);

}				
