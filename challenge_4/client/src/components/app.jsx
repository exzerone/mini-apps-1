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
			player2: false
		};
		this.gameHandler = this.gameHandler.bind(this);
		this.tableGenerate = this.tableGenerate.bind(this);
		this.turnHandler = this.turnHandler.bind(this);
    this.moveHandler = this.moveHandler.bind(this);
	}

	turnHandler() {
    this.setState({player1:!this.state.player1, player2:!this.state.player2})
	}

	gameHandler(board) {
		this.setState({ board });
  }
  

	tableGenerate() {
		var row = [];
		for (let y = 0; y < this.state.board.length; y++) {
			var space = [];
			for (let x = 0; x < this.state.board[y].length; x++) {
        if (this.state.board[y][x] === 0){
          space.push(
            <Square
              backgroundColor='white'
              key={x-y}
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
        } else if (this.state.board[y][x] === 1){
          space.push(
            <Square
              backgroundColor='lightgreen'
              key={x-y}
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
        } else if (this.state.board[y][x] === -1){
          space.push(
            <Square
              backgroundColor='red'
              key={x-y}
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
			// space.push(<br />);
			row.push(<div key={y}>{space}</div>);
		}
		return row;
	}

	moveHandler(column) {
    if (this.state.player1 === true){
      var sum = 0;
      var obj = this.state.board;
      for (var y = obj.length - 1; y >= 0; y--) {
        sum += obj[y][column]
        if (obj[y][column] === 0) {
          obj[y][column] = 1;
          break;
        } 
      }
      if (sum === 6) {
        alert('Invalid Move')
      } else {
        this.setState({ board: obj }, () => {
          return;
        });
      }
    } else {
      var sum = 0;
      var obj = this.state.board;
      for (var y = obj.length - 1; y >= 0; y--) {
        sum += obj[y][column]
        if (obj[y][column] === 0) {
          obj[y][column] = -1;
          break;
        } 
      }
      if (sum === -6) {
        alert('Invalid Moe')
      } else {
        this.setState({ board: obj }, () => {
          return;
        });
      }
    }
	}

	render() {
		return <div className="board">{this.tableGenerate()}</div>;
	}
}

export default App;
