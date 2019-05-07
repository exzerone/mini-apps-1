var cross = 1;
var circle = -1;
var crossTurn = true;
var circleTurn = false;
var newgame = false;
var player1 = '';
var player2 = '';

var board = [
	[{ 1: 0 }, { 2: 0 }, { 3: 0 }],
	[{ 4: 0 }, { 5: 0 }, { 6: 0 }],
	[{ 7: 0 }, { 8: 0 }, { 9: 0 }]
];

var winningTable = { cross: 0, circle: 0 };

(function(){
  player1 = prompt('Please Enter Name For Player 1, You Will Play Cross', '');
  player2 = prompt('Please Enter Name For Player 2, You Will Play Circle', '');
  document.getElementById('player1').innerHTML = player1;
  document.getElementById('player2').innerHTML = player2;
})()

const tableHandler = (cross, circle) => {
	winningTable.cross = cross;
	winningTable.circle = circle;
	document.getElementById('cross').innerHTML = winningTable.cross;
	document.getElementById('circle').innerHTML = winningTable.circle;
};

//place piece to the board accordingly
const positionHandler = (pos, piece) => {
	for (let row of board) {
		for (let space of row) {
			if (space.hasOwnProperty(pos)) {
				space[pos] = piece;
			}
		}
	}
	if (piece === 1) {
		crossTurn = false;
		circleTurn = true;
	} else if (piece === -1) {
		crossTurn = true;
		circleTurn = false;
	}
};


checkResult = () => {
	for (let y = 0; y < board.length; y++) {
		var sumR = 0;
		var sumC = 0;
		for (let x = 0; x < board[y].length; x++) {
			sumR += board[y][x][3 * y + x + 1];
			sumC += board[x][y][3 * x + y + 1];
			if (sumR === 3 || sumC === 3) {
				winningTable.cross += 1;
				tableHandler(winningTable.cross, winningTable.circle);
				alert('Cross Won! Cross Will Go First On Next Round!');
				crossTurn = true;
				circleTurn = false;
				return true;
			} else if (sumR === -3 || sumC === -3) {
				winningTable.circle += 1;
				tableHandler(winningTable.cross, winningTable.circle);
				alert('Circle Won! Circle Will Go First On Next Round!');
				crossTurn = false;
				circleTurn = true;
				return true;
			}
		}
	}
	if (
		board[0][0][1] + board[1][1][5] + board[2][2][9] === 3 ||
		board[0][2][3] + board[1][1][5] + board[2][0][7] === 3
	) {
		winningTable.cross += 1;
		tableHandler(winningTable.cross, winningTable.circle);
		alert('Cross Won! Cross Will Go First On Next Round!');
		crossTurn = true;
		circleTurn = false;
		return true;
	} else if (
		board[0][0][1] + board[1][1][5] + board[2][2][9] === -3 ||
		board[0][2][3] + board[1][1][5] + board[2][0][7] === -3
	) {
		winningTable.cross += 1;
		tableHandler(winningTable.cross, winningTable.circle);
		alert('Cross Won! Cross Will Go First On Next Round!');
		crossTurn = true;
		circleTurn = false;
		return true;
	}
};

//reset the entire board
const clearHandler = e => {
	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board[y].length; x++) {
			for (var key in board[y][x]) {
				board[y][x][key] = 0;
			}
		}
	}
	var divs = document.getElementsByClassName('box');
	for (var div of divs) {
		div.innerHTML = '';
	}
	newgame = false;
};

//Click-Controller for each box
const clickHandler = id => {
	if (newgame === false) {
		//declare an image tag in html
		var cross = document.createElement('img');
		var circle = document.createElement('img');
		cross.src = './cross.png';
		cross.height = '100';
		cross.width = '100';
		circle.src = './circle.png';
		circle.height = '100';
		cross.width = '100';

		//check if the space is currently occupied
		if (crossTurn === true) {
			//cross turn
			for (let row of board) {
				for (let space of row) {
					for (var pos in space) {
						if (pos === id) {
							if (space[pos] === 0) {
								positionHandler(id, 1);
								document.getElementById(id).appendChild(cross);
							} else if (space[pos] === 1 || space[pos] === -1) {
								alert('The space is already taken!');
							}
						}
					}
				}
			}
		} else if (crossTurn === false) {
			//circle turn
			for (let row of board) {
				for (let space of row) {
					for (var pos in space) {
						if (pos === id) {
							if (space[pos] === 0) {
								positionHandler(id, -1);
								document.getElementById(id).appendChild(circle);
							} else if (space[pos] === 1 || space[pos] === -1) {
								alert('The space is already taken!');
							}
						}
					}
				}
			}
		}
		if (checkResult()) {
			newgame = true;
		}
	} else {
		alert('Please Press Reset To Start A New Game!');
	}
};