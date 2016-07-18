import React from 'react'
import {render} from 'react-dom'
import Hello from '../src/hello'

const App = React.createClass({
  render (){
    return(
      <Hello/>
    )
  }
})

render(<App/>, document.getElementById('root'))
