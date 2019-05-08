class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
    };
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
	}

	usernameHandler(e) {
    e.preventDefault();
    var username = e.target.value;
    this.setState({ username });
	}

	passwordHandler(e) {
    e.preventDefault();
    var password = e.target.value;
		this.setState({ password });
	}

	emailHandler(e) {
    e.preventDefault();
    var email = e.target.value;
		this.setState({ email });
  }
  
  submitHandler(e){
    e.preventDefault();
    this.props.signHandler();
  }

	render() {
		return (
			<div>
				<h3>Account Creation</h3>
				<form>
					<label>Username: </label>
					<input onChange={this.usernameHandler} placeholder="Full Name" className="name" type="text" />
					<br />
					<label>Password: </label>
					<input onChange={this.passwordHandler} placeholder="Password" className="password" type="password" />
					<br />
					<label>E-Mail: </label>
					<input onChange={this.emailHandler} placeholder="E-Mail" className="email" type="email" />
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

// export default Signup;
