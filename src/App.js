import { Component } from "react";
import { FetchNews } from "./components/FetchNews";
import { About } from "./components/About";
import { BrowserRouter as Router } from "react-router-dom";
import Taptap from "./components/Taptap";
import { NavBar } from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Taptap",
    };
  }

  buttonClickHandler = () => {
    this.State({ message: "Hello,I'm in Taptap" });
    // alert("hello");
    console.log(this.props);
  };

  render() {
    return (
      <div className="App">
        {/* <Taptap /> */}
        <Router>
          <NavBar />
        </Router>
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
