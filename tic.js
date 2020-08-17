var board = Array.from(document.querySelectorAll('.col'));
var Xturn,count,Xwin,Owin;
var x,o;

init();

document.querySelector('.reset').addEventListener('click',function(){
	init();
	board.forEach(setEmpty);
	document.querySelector('.player1').textContent = "Player 1 - X";
	document.querySelector('.player2').textContent = "Player 2 - O";
	function setEmpty(item){
		item.innerHTML='';
	}
})

function init(){
	Xturn = 1;
	count=0;
	Xwin=0;
	Owin=0;
	x='X' , o='O';
	board.forEach(assign);
	document.querySelector('.player1').classList.remove('winner');
	document.querySelector('.player1').classList.remove('draw');
}


function assign(item){
	item.addEventListener('click',add);
	function add(){
	if(count < 9){
		if(Xturn){
		item.innerHTML=x;
		count+=1;
		}
		else{
		item.innerHTML=o;
		count+=1;
		}
		Xturn===1?Xturn=0:Xturn=1;
		board.forEach(remove);
		}
		function remove(item1){
				item1.removeEventListener('click',add);
			}
		if(count===9){
			checkWinner();	
		}	
	}
}

function checkWinner(){
	var winCombination=[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,4,8],
		[2,4,6],
		[0,3,6],
		[1,4,7],
		[2,5,8]
	];
	winCombination.forEach(check);
	if(Xwin > Owin){
		document.querySelector('.player1').textContent = "Player 1 - Winner";
		document.querySelector('.player2').textContent = "";
		document.querySelector('.player1').classList.add('winner');
	}
	else if(Owin > Xwin){
		document.querySelector('.player1').textContent = "Player 2 - Winner";
		document.querySelector('.player2').textContent = "";
		document.querySelector('.player1').classList.add('winner');
	}
	else{
		document.querySelector('.player1').textContent = "Draw Match";
		document.querySelector('.player2').textContent = "";
		document.querySelector('.player1').classList.add('draw');
	}
	function check(item){
		var pos0 = board[item[0]].innerHTML;
		var pos1 = board[item[1]].innerHTML;
		var pos2 = board[item[2]].innerHTML;
		if(pos0===pos1 && pos1===pos2 && pos0==='X')
			{Xwin = Xwin+1;}
		else if(pos0===pos1 && pos1===pos2 && pos0==='O')
			{Owin = Owin+1;}
	}
}