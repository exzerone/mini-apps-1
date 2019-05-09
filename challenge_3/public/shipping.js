class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addline1: '',
      addline2: '',
      email: '',
      state: '',
      zipcode: '',
      phone: ''
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
    this.props.shippingHandler();
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", null, "Shipping Information"), React.createElement("form", null, "Address Line 1:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Line 1",
      className: "addline1",
      type: "text"
    }), React.createElement("br", null), "Address Line 2:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Line 2",
      className: "addline2",
      type: "text"
    }), React.createElement("br", null), "City:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "City",
      className: "email",
      type: "text"
    }), React.createElement("br", null), "State:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "State",
      className: "state",
      type: "text"
    }), React.createElement("br", null), "ZipCode:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Zipcode",
      className: "zipcode",
      type: "number"
    }), React.createElement("br", null), "Phone Number:", ' ', React.createElement("input", {
      onChange: this.inputHandler,
      placeholder: "Phone",
      className: "phone",
      type: "number"
    })), React.createElement("input", {
      onClick: this.submitHandler,
      type: "submit",
      value: "Next"
    }));
  }

} // export default Shipping;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zaGlwcGluZy5qc3giXSwibmFtZXMiOlsiU2hpcHBpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImFkZGxpbmUxIiwiYWRkbGluZTIiLCJlbWFpbCIsInppcGNvZGUiLCJwaG9uZSIsImlucHV0SGFuZGxlciIsImJpbmQiLCJzdWJtaXRIYW5kbGVyIiwiZSIsImtleSIsInRhcmdldCIsImNsYXNzTmFtZSIsInNldFN0YXRlIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkU3RhdGVIYW5kbGVyIiwic2hpcHBpbmdIYW5kbGVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFOLFNBQXVCQyxLQUFLLENBQUNDLFNBQTdCLENBQXVDO0FBQ3RDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxFQURFO0FBRVpDLE1BQUFBLFFBQVEsRUFBRSxFQUZFO0FBR1pDLE1BQUFBLEtBQUssRUFBRSxFQUhLO0FBSVpILE1BQUFBLEtBQUssRUFBRSxFQUpLO0FBS1pJLE1BQUFBLE9BQU8sRUFBRSxFQUxHO0FBTVpDLE1BQUFBLEtBQUssRUFBRTtBQU5LLEtBQWI7QUFRQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBOztBQUVERCxFQUFBQSxZQUFZLENBQUNHLENBQUQsRUFBSTtBQUNmLFNBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLVixLQUFyQixFQUE0QjtBQUMzQixVQUFJVSxHQUFHLEtBQUtELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFyQixFQUFnQztBQUMvQixhQUFLQyxRQUFMLENBQWM7QUFBRSxXQUFDSCxHQUFELEdBQU9ELENBQUMsQ0FBQ0UsTUFBRixDQUFTRztBQUFsQixTQUFkO0FBQ0E7QUFDRDtBQUNEOztBQUVETixFQUFBQSxhQUFhLENBQUNDLENBQUQsRUFBSTtBQUNoQkEsSUFBQUEsQ0FBQyxDQUFDTSxjQUFGO0FBQ0EsU0FBS2hCLEtBQUwsQ0FBV2lCLGlCQUFYLENBQTZCLEtBQUtoQixLQUFsQztBQUNBLFNBQUtELEtBQUwsQ0FBV2tCLGVBQVg7QUFDQTs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1IsV0FDQyxpQ0FDQyx1REFERCxFQUVDLHFEQUNpQixHQURqQixFQUVDO0FBQ0MsTUFBQSxRQUFRLEVBQUUsS0FBS1osWUFEaEI7QUFFQyxNQUFBLFdBQVcsRUFBQyxRQUZiO0FBR0MsTUFBQSxTQUFTLEVBQUMsVUFIWDtBQUlDLE1BQUEsSUFBSSxFQUFDO0FBSk4sTUFGRCxFQVFDLCtCQVJELHFCQVNpQixHQVRqQixFQVVDO0FBQ0MsTUFBQSxRQUFRLEVBQUUsS0FBS0EsWUFEaEI7QUFFQyxNQUFBLFdBQVcsRUFBQyxRQUZiO0FBR0MsTUFBQSxTQUFTLEVBQUMsVUFIWDtBQUlDLE1BQUEsSUFBSSxFQUFDO0FBSk4sTUFWRCxFQWdCQywrQkFoQkQsV0FpQk8sR0FqQlAsRUFrQkM7QUFDQyxNQUFBLFFBQVEsRUFBRSxLQUFLQSxZQURoQjtBQUVDLE1BQUEsV0FBVyxFQUFDLE1BRmI7QUFHQyxNQUFBLFNBQVMsRUFBQyxPQUhYO0FBSUMsTUFBQSxJQUFJLEVBQUM7QUFKTixNQWxCRCxFQXdCQywrQkF4QkQsWUF5QlEsR0F6QlIsRUEwQkM7QUFDQyxNQUFBLFFBQVEsRUFBRSxLQUFLQSxZQURoQjtBQUVDLE1BQUEsV0FBVyxFQUFDLE9BRmI7QUFHQyxNQUFBLFNBQVMsRUFBQyxPQUhYO0FBSUMsTUFBQSxJQUFJLEVBQUM7QUFKTixNQTFCRCxFQWdDQywrQkFoQ0QsY0FpQ1UsR0FqQ1YsRUFrQ0M7QUFDQyxNQUFBLFFBQVEsRUFBRSxLQUFLQSxZQURoQjtBQUVDLE1BQUEsV0FBVyxFQUFDLFNBRmI7QUFHQyxNQUFBLFNBQVMsRUFBQyxTQUhYO0FBSUMsTUFBQSxJQUFJLEVBQUM7QUFKTixNQWxDRCxFQXdDQywrQkF4Q0QsbUJBeUNlLEdBekNmLEVBMENDO0FBQ0MsTUFBQSxRQUFRLEVBQUUsS0FBS0EsWUFEaEI7QUFFQyxNQUFBLFdBQVcsRUFBQyxPQUZiO0FBR0MsTUFBQSxTQUFTLEVBQUMsT0FIWDtBQUlDLE1BQUEsSUFBSSxFQUFDO0FBSk4sTUExQ0QsQ0FGRCxFQW1EQztBQUFPLE1BQUEsT0FBTyxFQUFFLEtBQUtFLGFBQXJCO0FBQW9DLE1BQUEsSUFBSSxFQUFDLFFBQXpDO0FBQWtELE1BQUEsS0FBSyxFQUFDO0FBQXhELE1BbkRELENBREQ7QUF1REE7O0FBckZxQyxDLENBd0Z2QyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGFkZGxpbmUxOiAnJyxcblx0XHRcdGFkZGxpbmUyOiAnJyxcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdHN0YXRlOiAnJyxcblx0XHRcdHppcGNvZGU6ICcnLFxuXHRcdFx0cGhvbmU6ICcnXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0SGFuZGxlciA9IHRoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpbnB1dEhhbmRsZXIoZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlKSB7XG5cdFx0XHRpZiAoa2V5ID09PSBlLnRhcmdldC5jbGFzc05hbWUpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtrZXldOiBlLnRhcmdldC52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzdWJtaXRIYW5kbGVyKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5jaGlsZFN0YXRlSGFuZGxlcih0aGlzLnN0YXRlKTtcblx0XHR0aGlzLnByb3BzLnNoaXBwaW5nSGFuZGxlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+U2hpcHBpbmcgSW5mb3JtYXRpb248L2gzPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRBZGRyZXNzIExpbmUgMTp7JyAnfVxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMaW5lIDFcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWRkbGluZTFcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0QWRkcmVzcyBMaW5lIDI6eycgJ31cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGluZSAyXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFkZGxpbmUyXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdENpdHk6eycgJ31cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2l0eVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRTdGF0ZTp7JyAnfVxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTdGF0ZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdGF0ZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRaaXBDb2RlOnsnICd9XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlppcGNvZGVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiemlwY29kZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFBob25lIE51bWJlcjp7JyAnfVxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQaG9uZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwaG9uZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxpbnB1dCBvbkNsaWNrPXt0aGlzLnN1Ym1pdEhhbmRsZXJ9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBTaGlwcGluZztcbiJdfQ==