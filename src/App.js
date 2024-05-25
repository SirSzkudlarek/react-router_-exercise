import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const Home = () => {
  return <h1>Homepage</h1>;
};

const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;
const Error = () => <h1>404 not found...</h1>;
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact="true">
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news">News</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
