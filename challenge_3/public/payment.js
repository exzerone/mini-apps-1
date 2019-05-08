class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", null, "Payment Information"), React.createElement("form", null, React.createElement("div", null, React.createElement("label", null, "Owner"), React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "owner"
    })), React.createElement("div", {
      class: "form-group CVV"
    }, React.createElement("label", {
      for: "cvv"
    }, "CVV"), React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "cvv"
    })), React.createElement("div", {
      className: "form-group",
      id: "card-number-field"
    }, React.createElement("label", {
      for: "cardNumber"
    }, "Card Number"), React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "cardNumber"
    })), "Credit Card:", ' ', React.createElement("input", {
      placeholder: "Card Number",
      className: "cc",
      type: "number"
    }), React.createElement("div", {
      className: "form-group",
      id: "expiration-date"
    }, React.createElement("label", null, "Expiration Date"), React.createElement("select", null, React.createElement("option", {
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
    }, "December")), React.createElement("select", null, React.createElement("option", {
      value: "16"
    }, " 2016"), React.createElement("option", {
      value: "17"
    }, " 2017"), React.createElement("option", {
      value: "18"
    }, " 2018"), React.createElement("option", {
      value: "19"
    }, " 2019"), React.createElement("option", {
      value: "20"
    }, " 2020"), React.createElement("option", {
      value: "21"
    }, " 2021")))));
  }

} // export default Payment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9wYXltZW50LmpzeCJdLCJuYW1lcyI6WyJQYXltZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFOLFNBQXNCQyxLQUFLLENBQUNDLFNBQTVCLENBQXNDO0FBQ3JDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0E7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNSLFdBQ0MsaUNBQ0Msc0RBREQsRUFFQyxrQ0FDTSxpQ0FDRSwyQ0FERixFQUVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLFNBQVMsRUFBQyxjQUE3QjtBQUE0QyxNQUFBLEVBQUUsRUFBQztBQUEvQyxNQUZGLENBRE4sRUFLTTtBQUFLLE1BQUEsS0FBSyxFQUFDO0FBQVgsT0FDRTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgsYUFERixFQUVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLFNBQVMsRUFBQyxjQUE3QjtBQUE0QyxNQUFBLEVBQUUsRUFBQztBQUEvQyxNQUZGLENBTE4sRUFTTTtBQUFLLE1BQUEsU0FBUyxFQUFDLFlBQWY7QUFBNEIsTUFBQSxFQUFFLEVBQUM7QUFBL0IsT0FDRTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgscUJBREYsRUFFRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxTQUFTLEVBQUMsY0FBN0I7QUFBNEMsTUFBQSxFQUFFLEVBQUM7QUFBL0MsTUFGRixDQVROLGtCQWFjLEdBYmQsRUFjQztBQUFPLE1BQUEsV0FBVyxFQUFDLGFBQW5CO0FBQWlDLE1BQUEsU0FBUyxFQUFDLElBQTNDO0FBQWdELE1BQUEsSUFBSSxFQUFDO0FBQXJELE1BZEQsRUFlQztBQUFLLE1BQUEsU0FBUyxFQUFDLFlBQWY7QUFBNEIsTUFBQSxFQUFFLEVBQUM7QUFBL0IsT0FDQyxxREFERCxFQUVDLG9DQUNDO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxpQkFERCxFQUVDO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxtQkFGRCxFQUdDO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxlQUhELEVBSUM7QUFBUSxNQUFBLEtBQUssRUFBQztBQUFkLGVBSkQsRUFLQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsYUFMRCxFQU1DO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxjQU5ELEVBT0M7QUFBUSxNQUFBLEtBQUssRUFBQztBQUFkLGNBUEQsRUFRQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsZ0JBUkQsRUFTQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsbUJBVEQsRUFVQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsaUJBVkQsRUFXQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsa0JBWEQsRUFZQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsa0JBWkQsQ0FGRCxFQWdCQyxvQ0FDQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsZUFERCxFQUVDO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxlQUZELEVBR0M7QUFBUSxNQUFBLEtBQUssRUFBQztBQUFkLGVBSEQsRUFJQztBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsZUFKRCxFQUtDO0FBQVEsTUFBQSxLQUFLLEVBQUM7QUFBZCxlQUxELEVBTUM7QUFBUSxNQUFBLEtBQUssRUFBQztBQUFkLGVBTkQsQ0FoQkQsQ0FmRCxDQUZELENBREQ7QUE4Q0E7O0FBcERvQyxDLENBdUR0QyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBheW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPlBheW1lbnQgSW5mb3JtYXRpb248L2gzPlxuXHRcdFx0XHQ8Zm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPk93bmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwib3duZXJcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIENWVlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImN2dlwiPkNWVjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImN2dlwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgaWQ9XCJjYXJkLW51bWJlci1maWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcmROdW1iZXJcIj5DYXJkIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNhcmROdW1iZXJcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdENyZWRpdCBDYXJkOnsnICd9XG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiQ2FyZCBOdW1iZXJcIiBjbGFzc05hbWU9XCJjY1wiIHR5cGU9XCJudW1iZXJcIiAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIGlkPVwiZXhwaXJhdGlvbi1kYXRlXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+RXhwaXJhdGlvbiBEYXRlPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxzZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwMVwiPkphbnVhcnk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjAyXCI+RmVicnVhcnkgPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwM1wiPk1hcmNoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwNFwiPkFwcmlsPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwNVwiPk1heTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMDZcIj5KdW5lPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwN1wiPkp1bHk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjA4XCI+QXVndXN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwOVwiPlNlcHRlbWJlcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMTBcIj5PY3RvYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxMVwiPk5vdmVtYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxMlwiPkRlY2VtYmVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDxzZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxNlwiPiAyMDE2PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxN1wiPiAyMDE3PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxOFwiPiAyMDE4PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxOVwiPiAyMDE5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMFwiPiAyMDIwPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyMVwiPiAyMDIxPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQYXltZW50O1xuIl19