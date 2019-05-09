class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkout: true,
			signup: false,
			payment: false,
			shipping: false,
			final: false,
			username: '',
			password: '',
			email: '',
			cardName: '',
			cvv: '',
			expireMonth: '',
			expireYear: '',
			cardNumber: '',
			addline1: '',
			addline2: '',
			state: '',
			zipcode: '',
			phone: ''
		};

		this.checkoutHandler = this.checkoutHandler.bind(this);
		this.signupHandler = this.signupHandler.bind(this);
		this.paymentHandler = this.paymentHandler.bind(this);
		this.childStateHandler = this.childStateHandler.bind(this);
		this.shippingHandler = this.shippingHandler.bind(this);
	}

	checkoutHandler(e) {
		e.preventDefault();
		this.setState({
			checkout: !this.state.checkout,
			signup: !this.state.signup
		});
	}

	signupHandler() {
		this.setState({ payment: !this.state.payment, signup: !this.state.signup });
	}

	paymentHandler() {
		this.setState({
			payment: !this.state.payment,
			shipping: !this.state.shipping
		});
	}

	shippingHandler() {
		this.setState({ shipping: !this.state.shipping, final: !this.state.final });
	}

	childStateHandler(state) {
		for (var key in state) {
			this.setState({ [key]: state[key] });
		}
	}

	render() {
		if (this.state.checkout === true) {
			return (
				<div>
					<h3>Checkout</h3>
					<button onClick={this.checkoutHandler} className="checkout">
						Checkout
					</button>
				</div>
			);
		} else if (this.state.signup === true) {
			return (
				<Signup
					childStateHandler={this.childStateHandler}
					signupHandler={this.signupHandler}
				/>
			);
		} else if (this.state.payment === true) {
			return (
				<Payment
					childStateHandler={this.childStateHandler}
					paymentHandler={this.paymentHandler}
				/>
			);
		} else if (this.state.shipping === true) {
			return (
				<Shipping
					shippingHandler={this.shippingHandler}
					childStateHandler={this.childStateHandler}
				/>
			);
		} else if (this.state.final === true) {
			return <Final state={this.state} />;
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
