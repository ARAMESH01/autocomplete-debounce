import React from "react";
import { render } from "react-dom";
import Downshift from "downshift";
import debounce from "lodash.debounce";

const items = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"];

class ApolloAutocomplete extends React.Component {
  state = {
    currValue: ""
  };

  onInputValueChange = inputValue => {
    console.log(inputValue);
    this.setState({
      currValue: inputValue
    });
  };

  onStateChange = debounce(({ inputValue }) => {
    if (typeof inputValue !== "undefined") {
      this.setState({
        currValue: inputValue
      });
    }
  }, 1000);

  render() {
    return (
      <Downshift
        onStateChange={this.onStateChange}
        onChange={selection => alert(`You selected ${selection}`)}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a state name</label>
            <input {...getInputProps()} />
            {isOpen ? (
              <div>
                {items
                  .filter(
                    i =>
                      !this.state.currValue || i.includes(this.state.currValue)
                  )
                  .map((item, index) => (
                    // <div
                    //   {...getItemProps({
                    //     key: item,
                    //     index,
                    //     item,
                    //     style: {
                    //       backgroundColor:
                    //         highlightedIndex === index ? "lightgray" : "white",
                    //       fontWeight: selectedItem === item ? "bold" : "normal"
                    //     }
                    //   })}
                    // >
                    <div>{item}</div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      />
    );
  }
}

render(<ApolloAutocomplete />, document.getElementById("root"));
