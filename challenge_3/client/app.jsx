
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checkout: true,
      signup: false,
      payment: false,
      shipping: false
    }
    this.checkoutHandler = this.checkoutHandler.bind(this);
  }

  checkoutHandler(e){
    e.preventDefault();
    this.setState({checkout: !this.state.checkout, signup:!this.state.signup});
  }

  signHandler(){
    this.setState({payment: !this.state.payment, signup: !this.state.signup})
  }


  render(){
    if (this.state.checkout === true){
      return(
        <div>
          <h3>Checkout</h3>
          <button onClick={this.checkoutHandler} className="checkout">Checkout</button>
        </div>
      )
    } else if (this.state.signup === true){
      return(
        <Signup signupHandler={this.signupHandler} />
      )
    } else if (this.state.payment === true){
      return(
        <Payment />
      )
    } else if (this.state.shipping === true){
      return (
        <Shipping  />
      )
    }
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));