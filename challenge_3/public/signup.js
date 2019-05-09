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
        this.setState({
          [key]: e.target.value
        });
      }
    }
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.childStateHandler(this.state);
    this.props.signupHandler();
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", null, "Account Creation"), React.createElement("form", null, React.createElement("label", null, "Full Name: "), React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Full Name",
      className: "username",
      type: "text"
    }), React.createElement("br", null), React.createElement("label", null, "Password: "), React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Password",
      className: "password",
      type: "password"
    }), React.createElement("br", null), React.createElement("label", null, "E-Mail: "), React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "E-Mail",
      className: "email",
      type: "email"
    }), React.createElement("br", null), React.createElement("input", {
      onClick: this.submitHandler,
      type: "submit",
      value: "Next"
    })));
  }

} // export default Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zaWdudXAuanN4Il0sIm5hbWVzIjpbIlNpZ251cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiaW5wdXRIYW5kbGVyIiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJlIiwia2V5IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRTdGF0ZUhhbmRsZXIiLCJzaWdudXBIYW5kbGVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLFNBQXFCQyxLQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQ3BDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxFQURFO0FBRVpDLE1BQUFBLFFBQVEsRUFBRSxFQUZFO0FBR1pDLE1BQUFBLEtBQUssRUFBRTtBQUhLLEtBQWI7QUFLQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBOztBQUVERCxFQUFBQSxZQUFZLENBQUNHLENBQUQsRUFBSTtBQUNmLFNBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLUixLQUFyQixFQUE0QjtBQUMzQixVQUFJUSxHQUFHLEtBQUtELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFyQixFQUFnQztBQUMvQixhQUFLQyxRQUFMLENBQWM7QUFBRSxXQUFDSCxHQUFELEdBQU9ELENBQUMsQ0FBQ0UsTUFBRixDQUFTRztBQUFsQixTQUFkO0FBQ0E7QUFDRDtBQUNEOztBQUVETixFQUFBQSxhQUFhLENBQUNDLENBQUQsRUFBSTtBQUNoQkEsSUFBQUEsQ0FBQyxDQUFDTSxjQUFGO0FBQ0EsU0FBS2QsS0FBTCxDQUFXZSxpQkFBWCxDQUE2QixLQUFLZCxLQUFsQztBQUNBLFNBQUtELEtBQUwsQ0FBV2dCLGFBQVg7QUFDQTs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1IsV0FDQyxpQ0FDQyxtREFERCxFQUVDLGtDQUNDLGlEQURELEVBRUM7QUFDQyxNQUFBLFFBQVEsRUFBRSxLQUFLWixZQURoQjtBQUVDLE1BQUEsV0FBVyxFQUFDLFdBRmI7QUFHQyxNQUFBLFNBQVMsRUFBQyxVQUhYO0FBSUMsTUFBQSxJQUFJLEVBQUM7QUFKTixNQUZELEVBUUMsK0JBUkQsRUFTQyxnREFURCxFQVVDO0FBQ0MsTUFBQSxRQUFRLEVBQUUsS0FBS0EsWUFEaEI7QUFFQyxNQUFBLFdBQVcsRUFBQyxVQUZiO0FBR0MsTUFBQSxTQUFTLEVBQUMsVUFIWDtBQUlDLE1BQUEsSUFBSSxFQUFDO0FBSk4sTUFWRCxFQWdCQywrQkFoQkQsRUFpQkMsOENBakJELEVBa0JDO0FBQ0MsTUFBQSxRQUFRLEVBQUUsS0FBS0EsWUFEaEI7QUFFQyxNQUFBLFdBQVcsRUFBQyxRQUZiO0FBR0MsTUFBQSxTQUFTLEVBQUMsT0FIWDtBQUlDLE1BQUEsSUFBSSxFQUFDO0FBSk4sTUFsQkQsRUF3QkMsK0JBeEJELEVBeUJDO0FBQU8sTUFBQSxPQUFPLEVBQUUsS0FBS0UsYUFBckI7QUFBb0MsTUFBQSxJQUFJLEVBQUMsUUFBekM7QUFBa0QsTUFBQSxLQUFLLEVBQUM7QUFBeEQsTUF6QkQsQ0FGRCxDQUREO0FBZ0NBOztBQTNEbUMsQyxDQThEckMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXNlcm5hbWU6ICcnLFxuXHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0ZW1haWw6ICcnXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0SGFuZGxlciA9IHRoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpbnB1dEhhbmRsZXIoZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlKSB7XG5cdFx0XHRpZiAoa2V5ID09PSBlLnRhcmdldC5jbGFzc05hbWUpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtrZXldOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzdWJtaXRIYW5kbGVyKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5jaGlsZFN0YXRlSGFuZGxlcih0aGlzLnN0YXRlKTtcblx0XHR0aGlzLnByb3BzLnNpZ251cEhhbmRsZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPkFjY291bnQgQ3JlYXRpb248L2gzPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8bGFiZWw+RnVsbCBOYW1lOiA8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGxhYmVsPlBhc3N3b3JkOiA8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGxhYmVsPkUtTWFpbDogPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRS1NYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8aW5wdXQgb25DbGljaz17dGhpcy5zdWJtaXRIYW5kbGVyfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgLz5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iXX0=