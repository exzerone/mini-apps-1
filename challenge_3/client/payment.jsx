class Payment extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cvv: '',
      expireMonth: '',
      expireYear: '',
      cardNumber: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  
  inputHandler(e){
    for (var key in this.state){
      if (key === e.target.className){
        this.setState({[key]:e.target.value})
      }
    }
  }

  submitHandler(e){
    e.preventDefault();
    this.props.childStateHandler(this.state);
    this.props.paymentHandler();
  }

	render() {
		return (
			<div>
				<h3>Payment Information</h3>
				<form>
          <div>
            <label>Card Holder's Name</label>
            <input onChange={this.inputHandler} type="text" className="cardName" id="form" ></input>
          </div>
          <div className="CVV">
            <label>CVV</label>
            <input onChange={this.inputHandler} type="text" className="cvv" id="form"></input>
          </div>
          <div id="card-number-field">
            <label>Card Number</label>
            <input onChange={this.inputHandler} maxLength="16" type="text" className="cardNumber" id="form"></input>
          </div>
					<div id="expiration-date">
						<label>Expiration Date</label>
						<select className="expireMonth" onChange={this.inputHandler} id="form">
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
						<select className="expireYear" onChange={this.inputHandler} id="form">
							<option value="2016"> 2016</option>
							<option value="2017"> 2017</option>
							<option value="2018"> 2018</option>
							<option value="2019"> 2019</option>
							<option value="2020"> 2020</option>
							<option value="2021"> 2021</option>
						</select>
					</div>
				</form>
        <input onClick={this.submitHandler} type="submit" value="Next"></input>
			</div>
		);
	}
}

// export default Payment;
