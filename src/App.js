import React, { Component } from "react";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      black: (opacity = 1) => `rgba(16, 22, 25, ${opacity})`,
      lightGreen: (opacity = 1) => `rgba(114, 144, 116, ${opacity})`,
      darkGreen: (opacity = 1) => `rgba(27, 69, 66, ${opacity})`,
      lightYellow: (opacity = 1) => `rgba(250, 243, 214, ${opacity})`,
      darkYellow: (opacity = 1) => `rgba(203, 173, 71, ${opacity})`,
      dustyRose: (opacity = 1) => `rgba(200, 91, 92, ${opacity})`,

    };


    return (
        <div
            style={{
              backgroundColor: styles.darkGreen(1),
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