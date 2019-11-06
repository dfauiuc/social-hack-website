import React, { Component } from "react";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      black: (opacity = 1) => `rgba(16, 23, 26, ${opacity})`,
      lightGreen: (opacity = 1) => `rgba(106, 146, 113, ${opacity})`,
      darkGreen: (opacity = 1) => `rgba(0, 51, 47, ${opacity})`,
      lightYellow: (opacity = 1) => `rgba(251, 243, 211, ${opacity})`,
      darkYellow: (opacity = 1) => `rgba(230, 178, 43, ${opacity})`,
      dustyRose: (opacity = 1) => `rgba(249, 76, 93, ${opacity})`,

    };


    return (
        <div
            style={{
              backgroundColor: styles.lightGreen(1),
              minHeight: "100vh",
              position: "relative"
            }}
        >
          <Content styles={styles} />
        </div>
    );
  }
}

export default App;