import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: '',
			player2: ''
		};
		this.tableGenerate = this.tableGenerate.bind(this);
	}
	tableGenerate() {
		var row = [];
		for (let y = 0; y < 6; y++) {
			var space = [];
			for (let x = 0; x < 7; x++) {
				space.push(
					<td key={x} y={y} x={x}>
						Hi
					</td>
				);
			}
			row.push(<tr key={y}>{space}</tr>);
		}
		return row;
	}

	render() {
		return (
			<table>
				<tbody>{this.tableGenerate()}</tbody>
			</table>
		);
	}
}

export default App;
