import Contact from './contact/Contact.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to='/contact'>Kontakt</Link>
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
