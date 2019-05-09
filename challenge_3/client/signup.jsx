class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
		};
		this.inputHandler = this.inputHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	inputHandler(e) {
		for (var key in this.state) {
			if (key === e.target.className) {
				this.setState({ [key]: e.target.value });
			}
		}
	}

	submitHandler(e) {
		e.preventDefault();
		this.props.childStateHandler(this.state);
		this.props.signupHandler();
	}

	render() {
		return (
			<div>
				<h3>Account Creation</h3>
				<form>
					<label>Full Name: </label>
					<input
						onChange={this.inputHandler}
						placeholder="Full Name"
						className="username"
						type="text"
					/>
					<br />
					<label>Password: </label>
					<input
						onChange={this.inputHandler}
						placeholder="Password"
						className="password"
						type="password"
					/>
					<br />
					<label>E-Mail: </label>
					<input
						onChange={this.inputHandler}
						placeholder="E-Mail"
						className="email"
						type="email"
					/>
					<br />
					<input onClick={this.submitHandler} type="submit" value="Next" />
				</form>
			</div>
		);
	}
}

// export default Signup;
