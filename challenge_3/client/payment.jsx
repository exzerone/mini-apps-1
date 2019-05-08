class Payment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Payment Information</h3>
				<form>
          <div>
            <label>Owner</label>
            <input type="text" className="form-control" id="owner"></input>
          </div>
          <div class="form-group CVV">
            <label for="cvv">CVV</label>
            <input type="text" className="form-control" id="cvv"></input>
          </div>
          <div className="form-group" id="card-number-field">
            <label for="cardNumber">Card Number</label>
            <input type="text" className="form-control" id="cardNumber"></input>
          </div>
					Credit Card:{' '}
					<input placeholder="Card Number" className="cc" type="number" />
					<div className="form-group" id="expiration-date">
						<label>Expiration Date</label>
						<select>
							<option value="01">January</option>
							<option value="02">February </option>
							<option value="03">March</option>
							<option value="04">April</option>
							<option value="05">May</option>
							<option value="06">June</option>
							<option value="07">July</option>
							<option value="08">August</option>
							<option value="09">September</option>
							<option value="10">October</option>
							<option value="11">November</option>
							<option value="12">December</option>
						</select>
						<select>
							<option value="16"> 2016</option>
							<option value="17"> 2017</option>
							<option value="18"> 2018</option>
							<option value="19"> 2019</option>
							<option value="20"> 2020</option>
							<option value="21"> 2021</option>
						</select>
					</div>
				</form>
			</div>
		);
	}
}

// export default Payment;
