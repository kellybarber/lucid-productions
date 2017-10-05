import React           from 'react'
import {Switch, Route} from 'react-router-dom'
import '../stylesheets/App.css'

import Header   from './Header'
import Home     from './Home'
import Projects from './Projects'
import Team     from './Team'


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/team' component={Team} />
        </Switch>
      </div>
    )
  }
}

export default App
