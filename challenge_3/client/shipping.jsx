class Shipping extends React.Component {
	constructor(props) {
    super(props);
    this.state={
      addline1: '',
      addline2: '',
      email: '',
      state: '',
      zipcode: '',
      phone: ''
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
    this.props.shippingHandler();
  }


	render() {
		return (
			<div>
				<h3>Shipping Information</h3>
				<form>
					Address Line 1:{' '}
					<input onChange={this.inputHandler} placeholder="Line 1" className="addline1" type="text" />
          <br></br>
          Address Line 2:{' '}
					<input onChange={this.inputHandler} placeholder="Line 2" className="addline2" type="text" />
          <br></br>
					City: <input onChange={this.inputHandler} placeholder="City" className="email" type="text" />
          <br></br>
					State: <input onChange={this.inputHandler} placeholder="State" className="state" type="text" />
          <br></br>
					ZipCode:{' '}
					<input onChange={this.inputHandler} placeholder="Zipcode" className="zipcode" type="number" />
          <br></br>
					Phone Number:{' '}
					<input onChange={this.inputHandler} placeholder="Phone" className="phone" type="number" />
				</form>
        <input onClick={this.submitHandler} type="submit" value="Next"></input>
			</div>
		);
	}
}

// export default Shipping;
