import React, { Component } from 'react';
import Layout from './Components/Layout';
import './Components/style.css'
import './index.css'
import Particles from 'react-particles-js';
import Menu from './Components/Menu';
import Timer from "./Components/Timer";
import AboutApp from "./Components/AboutApp";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }


  render() {
      let Child

      switch (this.state.route) {
          case '/app': Child = <div><Layout width={4} height={2} /></div>; break;
          case '/about-app': Child = <AboutApp />; break;
          default: Child = <div><Layout width={4} height={2} /></div>;
      }
    return (
      <div className="App">
          <Particles  className="particles-js" params={{
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          enable: true,
                          value_area: 900
                      }
                  },
              },

              }}/>
        <header className="App-header">
          <span>The Best Memory Game</span>
        </header>
          <ul className="menu">
              <li><a href='#/app'>App</a></li>
              <li><Timer /></li>
              <li><a href='#/about-app'>About App</a></li>
          </ul>
          {Child}

      </div>
    );
  }
}

export default App;
