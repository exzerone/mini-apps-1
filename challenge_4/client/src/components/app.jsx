import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0]
			],
			player1: true,
			player2: false,
      winningtable: { player1: 0, player2: 0 },
      player1won: false,
      player2won: false
		};
		this.gameHandler = this.gameHandler.bind(this);
		this.tableGenerate = this.tableGenerate.bind(this);
		this.turnHandler = this.turnHandler.bind(this);
    this.moveHandler = this.moveHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    // this.submitScoreHandler = this.submitScoreHandler.bind(this);
	}

	turnHandler() {
		this.setState({
			player1: !this.state.player1,
			player2: !this.state.player2
		});
	}

	gameHandler(board) {
		this.setState({ board });
	}

	tableGenerate() {
		var row = [];
		for (let y = 0; y < this.state.board.length; y++) {
			var space = [];
			for (let x = 0; x < this.state.board[y].length; x++) {
				if (this.state.board[y][x] === 0) {
					space.push(
						<Square
							backgroundColor="white"
              key={x - y}
              player1won={this.state.player1won}
              player2won={this.state.player2won}
							player2={this.state.player2}
							player1={this.state.player1}
							turnHandler={this.turnHandler}
							gameHandler={this.gameHandler}
							board={this.state.board}
							moveHandler={this.moveHandler}
							x={x}
							y={y}
							value={this.state.board[y][x]}
						/>
					);
				} else if (this.state.board[y][x] === 1) {
					space.push(
						<Square
							backgroundColor="lightgreen"
              key={x - y}
              player1won={this.state.player1won}
              player2won={this.state.player2won}
							player2={this.state.player2}
							player1={this.state.player1}
							turnHandler={this.turnHandler}
							gameHandler={this.gameHandler}
							board={this.state.board}
							moveHandler={this.moveHandler}
							x={x}
							y={y}
							value={this.state.board[y][x]}
						/>
					);
				} else if (this.state.board[y][x] === 10) {
					space.push(
						<Square
							backgroundColor="red"
              key={x - y}
              player1won={this.state.player1won}
              player2won={this.state.player2won}
							player2={this.state.player2}
							player1={this.state.player1}
							turnHandler={this.turnHandler}
							gameHandler={this.gameHandler}
							board={this.state.board}
							moveHandler={this.moveHandler}
							x={x}
							y={y}
							value={this.state.board[y][x]}
						/>
					);
				}
			}
			row.push(<div key={y}>{space}</div>);
		}
		return row;
	}

	moveHandler(column) {
		if (this.state.player1 === true) {
			var sum = 0;
			var obj = this.state.board;
			for (var y = obj.length - 1; y >= 0; y--) {
				if (obj[0][column] !== 0) {
					alert('Column Already Filled! Invalid Move!');
					return;
				}
				if (obj[y][column] === 0) {
					obj[y][column] = 1;
					break;
				}
			}
			this.setState({ board: obj }, () => {
				return;
			});
		} else {
			var sum = 0;
			var obj = this.state.board;
			for (var y = obj.length - 1; y >= 0; y--) {
				if (obj[0][column] !== 0) {
					alert('Column Already Filled! Invalid Move!');
					return;
				}
				if (obj[y][column] === 0) {
					obj[y][column] = 10;
					break;
				}
			}
			this.setState({ board: obj }, () => {
				return;
			});
		}
		this.winHandler();
	}

	winHandler() {
    var board = this.state.board;
		var winningtable = this.state.winningtable;
		for (let y = 0; y < board.length; y++) {
			var sumR = 0;
			for (let x = 0; x < board[y].length; x++) {
        sumR += board[y][x];
        if (sumR === 4){
          winningtable['player1'] += 1;
          alert('Player1 has Won!');
          this.setState({player1won:!this.state.player1won}, ()=>{
            return;
          })
        } else if (sumR === 40){
          winningtable['player2'] += 1;
          alert('Player2 has won!');
          this.setState({player2won:!this.state.player2won}, ()=>{
            return;
          })
        }
      }
    }
    for (let y = 0; y < 7; y++){
      var sumC = 0;
      for (let x = 0; x < board.length; x++){
        sumC += board[x][y];
        if (sumC === 4){
          winningtable['player1'] += 1;
          alert('Player1 has Won!');
          this.setState({player1won:!this.state.player1won}, ()=>{
            return;
          })
        } else if (sumC === 40){
          winningtable['player2'] += 1;
          alert('Player2 has won!');
          this.setState({player2won:!this.state.player2won}, ()=>{
            return;
          })
        }
      }
    }
  }
  
  resetHandler(e){
    e.preventDefault();
    var board = this.state.board;
    for (let y = 0; y < board.length; y++){
      for (let x = 0; x < board[y].length; x++){
        board[y][x] = 0;
      }
    }
    this.setState({board});
  }
  // submitScoreHandler(e){
    
  // }


	render() {
		return (
      <div>
        <div className="board">{this.tableGenerate()}</div>
        <button onClick={this.resetHandler}>Reset Game</button>
        {/* <button>Submit Score</button> */}
      </div>
    )
	}
}

export default App;
