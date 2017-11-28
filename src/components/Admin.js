import React from 'react'
import '../stylesheets/Admin.css'

import HomeController from './admin-components/HomeController'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "home" : {
        "video" : "",
        "whoWeAre" : {
          "title" : "Who We Are",
          "team" : "Katie, Alex, Gordon & Spencer"
        },
        "What We're Doing" : {}
      },
      "projects" : {
        "Now Playing" : {},
        "Coming Soon" : {}
      },
      "team" : {}
    }
  }

  render() {
    return (
      <div id='AdminContainer'>
        <HomeController data={this.state.home}/>
      </div>
    )
  }
}
export default Admin
