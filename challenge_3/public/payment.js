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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9wYXltZW50LmpzeCJdLCJuYW1lcyI6WyJQYXltZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjYXJkTmFtZSIsImN2diIsImV4cGlyZU1vbnRoIiwiZXhwaXJlWWVhciIsImNhcmROdW1iZXIiLCJpbnB1dEhhbmRsZXIiLCJiaW5kIiwic3VibWl0SGFuZGxlciIsImUiLCJrZXkiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzZXRTdGF0ZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZFN0YXRlSGFuZGxlciIsInBheW1lbnRIYW5kbGVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFOLFNBQXNCQyxLQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQ3JDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNoQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFFBQVEsRUFBRSxFQURDO0FBRVhDLE1BQUFBLEdBQUcsRUFBRSxFQUZNO0FBR1hDLE1BQUFBLFdBQVcsRUFBRSxFQUhGO0FBSVhDLE1BQUFBLFVBQVUsRUFBRSxFQUpEO0FBS1hDLE1BQUFBLFVBQVUsRUFBRTtBQUxELEtBQWI7QUFPQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNEOztBQUdERCxFQUFBQSxZQUFZLENBQUNHLENBQUQsRUFBRztBQUNiLFNBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLVixLQUFyQixFQUEyQjtBQUN6QixVQUFJVSxHQUFHLEtBQUtELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFyQixFQUErQjtBQUM3QixhQUFLQyxRQUFMLENBQWM7QUFBQyxXQUFDSCxH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bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkTmFtZTogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgZXhwaXJlTW9udGg6ICcnLFxuICAgICAgZXhwaXJlWWVhcjogJycsXG4gICAgICBjYXJkTnVtYmVyOiAnJ1xuICAgIH1cbiAgICB0aGlzLmlucHV0SGFuZGxlciA9IHRoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cbiAgXG4gIFxuICBpbnB1dEhhbmRsZXIoZSl7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUpe1xuICAgICAgaWYgKGtleSA9PT0gZS50YXJnZXQuY2xhc3NOYW1lKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleV06ZS50YXJnZXQudmFsdWV9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEhhbmRsZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuY2hpbGRTdGF0ZUhhbmRsZXIodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5wcm9wcy5wYXltZW50SGFuZGxlcigpO1xuICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+UGF5bWVudCBJbmZvcm1hdGlvbjwvaDM+XG5cdFx0XHRcdDxmb3JtPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+Q2FyZCBIb2xkZXIncyBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXJ9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY2FyZE5hbWVcIiBpZD1cImZvcm1cIiA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNWVlwiPlxuICAgICAgICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN2dlwiIGlkPVwiZm9ybVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImNhcmQtbnVtYmVyLWZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWw+Q2FyZCBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gbWF4TGVuZ3RoPVwiMTZcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNhcmROdW1iZXJcIiBpZD1cImZvcm1cIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJleHBpcmF0aW9uLWRhdGVcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD5FeHBpcmF0aW9uIERhdGU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJleHBpcmVNb250aFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gaWQ9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwMVwiPkphbnVhcnk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjAyXCI+RmVicnVhcnkgPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwM1wiPk1hcmNoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwNFwiPkFwcmlsPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwNVwiPk1heTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDZcIj5KdW5lPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwN1wiPkp1bHk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjA4XCI+QXVndXN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwOVwiPlNlcHRlbWJlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTBcIj5PY3RvYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxMVwiPk5vdmVtYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxMlwiPkRlY2VtYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZXhwaXJlWWVhclwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlcn0gaWQ9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE2XCI+IDIwMTY8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMTdcIj4gMjAxNzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAxOFwiPiAyMDE4PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMDE5XCI+IDIwMTk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjIwMjBcIj4gMjAyMDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMjAyMVwiPiAyMDIxPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5zdWJtaXRIYW5kbGVyfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiJdfQ==