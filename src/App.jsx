import logo from './logo.svg'
import './App.css'
import Contact from './contact/Contact.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
          <Link to='/contact'>Kontakt</Link>
        </header>
      </div>
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
