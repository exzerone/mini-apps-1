class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cvv: '',
      expireMonth: '',
      expireYear: '',
      cardNumber: ''
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
    this.props.paymentHandler();
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", null, "Payment Information"), React.createElement("form", null, React.createElement("div", null, React.createElement("label", null, "Card Holder's Name"), React.createElement("input", {
      onChange: this.inputHandler,
      type: "text",
      className: "cardName",
      id: "form"
    })), React.createElement("div", {
      className: "CVV"
    }, React.createElement("label", null, "CVV"), React.createElement("input", {
      onChange: this.inputHandler,
      type: "text",
      className: "cvv",
      id: "form"
    })), React.createElement("div", {
      id: "card-number-field"
    }, React.createElement("label", null, "Card Number"), React.createElement("input", {
      onChange: this.inputHandler,
      maxLength: "16",
      type: "text",
      className: "cardNumber",
      id: "form"
    })), React.createElement("div", {
      id: "expiration-date"
    }, React.createElement("label", null, "Expiration Date"), React.createElement("select", {
      className: "expireMonth",
      onChange: this.inputHandler,
      id: "form"
    }, React.createElement("option", {
      value: "01"
    }, "January"), React.createElement("option", {
      value: "02"
    }, "February "), React.createElement("option", {
      value: "03"
    }, "March"), React.createElement("option", {
      value: "04"
    }, "April"), React.createElement("option", {
      value: "05"
    }, "May"), React.createElement("option", {
      value: "06"
    }, "June"), React.createElement("option", {
      value: "07"
    }, "July"), React.createElement("option", {
      value: "08"
    }, "August"), React.createElement("option", {
      value: "09"
    }, "September"), React.createElement("option", {
      value: "10"
    }, "October"), React.createElement("option", {
      value: "11"
    }, "November"), React.createElement("option", {
      value: "12"
    }, "December")), React.createElement("select", {
      className: "expireYear",
      onChange: this.inputHandler,
      id: "form"
    }, React.createElement("option", {
      value: "2016"
    }, " 2016"), React.createElement("option", {
      value: "2017"
    }, " 2017"), React.createElement("option", {
      value: "2018"
    }, " 2018"), React.createElement("option", {
      value: "2019"
    }, " 2019"), React.createElement("option", {
      value: "2020"
    }, " 2020"), React.createElement("option", {
      value: "2021"
    }, " 2021")))), React.createElement("input", {
      onClick: this.submitHandler,
      type: "submit",
      value: "Next"
    }));
  }

} // export default Payment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9wYXltZW50LmpzeCJdLCJuYW1lcyI6WyJQYXltZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjYXJkTmFtZSIsImN2diIsImV4cGlyZU1vbnRoIiwiZXhwaXJlWWVhciIsImNhcmROdW1iZXIiLCJpbnB1dEhhbmRsZXIiLCJiaW5kIiwic3VibWl0SGFuZGxlciIsImUiLCJrZXkiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzZXRTdGF0ZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZFN0YXRlSGFuZGxlciIsInBheW1lbnRIYW5kbGVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFOLFNBQXNCQyxLQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQ3JDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxFQURFO0FBRVpDLE1BQUFBLEdBQUcsRUFBRSxFQUZPO0FBR1pDLE1BQUFBLFdBQVcsRUFBRSxFQUhEO0FBSVpDLE1BQUFBLFVBQVUsRUFBRSxFQUpBO0FBS1pDLE1BQUFBLFVBQVUsRUFBRTtBQUxBLEtBQWI7QUFPQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBOztBQUVERCxFQUFBQSxZQUFZLENBQUNHLENBQUQsRUFBSTtBQUNmLFNBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLVixLQUFyQixFQUE0QjtBQUMzQixVQUFJVSxHQUFHLEtBQUtELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFyQixFQUFnQztBQUMvQixhQUFLQyxRQUFMLENBQWM7QUFBRSxXQUFDSCxH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bXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjYXJkTmFtZTogJycsXG5cdFx0XHRjdnY6ICcnLFxuXHRcdFx0ZXhwaXJlTW9udGg6ICcnLFxuXHRcdFx0ZXhwaXJlWWVhcjogJycsXG5cdFx0XHRjYXJkTnVtYmVyOiAnJ1xuXHRcdH07XG5cdFx0dGhpcy5pbnB1dEhhbmRsZXIgPSB0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuXHRcdFx0aWYgKGtleSA9PT0gZS50YXJnZXQuY2xhc3NOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBba2V5XTogZS50YXJnZXQudmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3VibWl0SGFuZGxlcihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuY2hpbGRTdGF0ZUhhbmRsZXIodGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5wcm9wcy5wYXltZW50SGFuZGxlcigpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+UGF5bWVudCBJbmZvcm1hdGlvbjwvaDM+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+Q2FyZCBIb2xkZXIncyBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZE5hbWVcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNWVlwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkNWVjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN2dlwiXG5cdFx0XHRcdFx0XHRcdGlkPVwiZm9ybVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJjYXJkLW51bWJlci1maWVsZFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkNhcmQgTnVtYmVyPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdG1heExlbmd0aD1cIjE2XCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkTnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJmb3JtXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBpZD1cImV4cGlyYXRpb24tZGF0ZVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImV4cGlyZU1vbnRoXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfVxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDFcIj5KYW51YXJ5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwMlwiPkZlYnJ1YXJ5IDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDNcIj5NYXJjaDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDRcIj5BcHJpbDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDVcIj5NYXk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjA2XCI+SnVuZTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDdcIj5KdWx5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwOFwiPkF1Z3VzdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDlcIj5TZXB0ZW1iZXI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjEwXCI+T2N0b2Jlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTFcIj5Ob3ZlbWJlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTJcIj5EZWNlbWJlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImV4cGlyZVllYXJcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdGlkPVwiZm9ybVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE2XCI+IDIwMTY8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTdcIj4gMjAxNzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxOFwiPiAyMDE4PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE5XCI+IDIwMTk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMjBcIj4gMjAyMDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAyMVwiPiAyMDIxPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8aW5wdXQgb25DbGljaz17dGhpcy5zdWJtaXRIYW5kbGVyfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiJdfQ==