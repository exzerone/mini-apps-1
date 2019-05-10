import React from 'react';
// import Square from './square.jsx';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: this.props.board,
			backgroundColor: 'white',
			toggle: false
		};
		// this.tableGenerate = this.tableGenerate.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		// this.validPlay = this.validPlay.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		var x = e.target.dataset.x;
		this.props.moveHandler(x);
		this.props.turnHandler();
		// if (this.props.value === 1){
		// 	this.setState({backgroundColor: 'lightgreen'})
		// } else if (this.props.value === -1){
		// 	this.setState({backgroundColor: 'yellow'})
		// }
		// this.props.gameHandler(this.state.board);
		// if(this.props.player1 === true){
		// 	this.setState({backgroundColor: 'lightgreen'})
		// } else if (this.props.player2 === true){
		// 	this.setState({backgroundColor: 'yellow'})
		// }
		// this.props.turnHandler();
	}

	// validPlay(column) {
	// 	// var sum = 0;
	// 	// var obj = this.state.board;
	// 	// for (var y = obj.length - 1; y >= 0; y--) {
	// 	// 	if (obj[y][column] === 0) {
	// 	// 		obj[y][column] = 1;
	// 	// 		break;
	// 	// 	} else {
	// 	// 		sum++;
	// 	// 	}
	// 	// }
	// 	// if (sum === 6) {
	// 	// 	return false;
	// 	// } else {
	// 	// 	this.setState({ board: obj }, () => {
	// 	// 		return true;
	// 	// 	});
	// 	// }
	// 	if (this.props.value === 1){

	// 	}
	// }

	// tableGenerate() {
	// 	var row = [];
	// 	for (let y = 0; y < 6; y++) {
	// 		var space = [];
	// 		for (let x = 0; x < 7; x++) {
	// 			space.push(
	// 				<td id={x} className="square" key={x} data-y={y} data-x={x} />
	// 			);
	// 		}
	// 		row.push(
	// 			<tr id={y} onClick={this.clickHandler} className="row" key={y}>
	// 				{space}
	// 			</tr>
	// 		);
	// 	}
	// 	return row;
	// }

	render() {
		return (
			<button
				className="square"
				style={{ backgroundColor: this.props.backgroundColor }}
				onClick={this.clickHandler}
				data-y={this.props.y}
				data-x={this.props.x}
			/>
		);
	}
}

export default Square;
