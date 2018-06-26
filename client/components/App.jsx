import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      poems: []
    }
  }
  render () {
    return (
      <h1>Hi me</h1>
    )
  }
}

export default App
