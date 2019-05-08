class Shipping extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Shipping Information</h3>
				<form>
					Address Line 1:{' '}
					<input placeholder="Line 1" className="addline1" type="text" />
          <br></br>
          Address Line 2:{' '}
					<input placeholder="Line 2" className="addline2" type="text" />
          <br></br>
					City: <input placeholder="City" className="email" type="text" />
          <br></br>
					State: <input placeholder="State" className="state" type="text" />
          <br></br>
					ZipCode:{' '}
					<input placeholder="Zipcode" className="name" type="number" />
          <br></br>
					Phone Number:{' '}
					<input placeholder="Phone" className="phone" type="number" />
				</form>
			</div>
		);
	}
}

// export default Shipping;
