class Final extends React.Component {
	constructor(props) {
    super(props);
    this.requestHandler = this.requestHandler.bind(this);
	}

  requestHandler(e){
    e.preventDefault();
    $.post({
      type: 'POST',
      url: 'http://localhost:5000',
      data: this.props.state,
      error: function (error) {
        console.error('Failed to send data', error);
      }
    });
  };


	render() {
		return (
			<div>
				<h3> Please Confirm Your Information</h3>
				<div>Your Name: {this.props.state['username']}</div>
				<br />
				<div>Your Password: {this.props.state['password']}</div>
				<br />
				<div>Your E-Mail: {this.props.state['email']}</div>
				<br />
				<div>Name On Credit Card: {this.props.state['cardName']}</div>
				<br />
				<div>CVV: {this.props.state['cvv']}</div>
				<br />
				<div>Expiration Month: {this.props.state['expireMonth']}</div>
				<br />
				<div>Expiration Year: {this.props.state['expireYear']}</div>
				<br />
				<div>Your Address Line 1: {this.props.state['addline1']}</div>
				<br />
				<div>Your Address line 2: {this.props.state['addline2']}</div>
				<br />
				<div>Your E-Mail: {this.props.state['email']}</div>
				<br />
				<div>State: {this.props.state['state']}</div>
				<br />
				<div>Zip Code: {this.props.state['zipcode']}</div>
				<br />
				<div>Phone Number: {this.props.state['phone']}</div>
				<br />
				<input onClick={this.requestHandler} type="submit" value="Next" />
			</div>
		);
	}
}
