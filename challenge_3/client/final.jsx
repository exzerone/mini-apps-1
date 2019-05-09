class Final extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
     <div>
       <h3> Please Confirm Your Information</h3>
       <div>Your Name: {this.props.state['username']}</div>
       <br></br>
       <div>Your Password: {this.props.state['password']}</div>
       <br></br>
       <div>Your E-Mail: {this.props.state['email']}</div>
       <br></br>
       <div>Name On Credit Card: {this.props.state['cardName']}</div>
       <br></br>
       <div>CVV: {this.props.state['cvv']}</div>
       <br></br>
       <div>Expiration Month: {this.props.state['expireMonth']}</div>
       <br></br>
       <div>Expiration Year: {this.props.state['expireYear']}</div>
       <br></br>
       <div>Your Address Line 1: {this.props.state['addline1']}</div>
       <br></br>
       <div>Your Address line 2: {this.props.state['addline2']}</div>
       <br></br>
       <div>Your E-Mail: {this.props.state['email']}</div>
       <br></br>
       <div>State: {this.props.state['state']}</div>
       <br></br>
       <div>Zip Code: {this.props.state['zipcode']}</div>
       <br></br>
       <div>Phone Number: {this.props.state['phone']}</div>
       <br></br>
     </div>
  )}
}