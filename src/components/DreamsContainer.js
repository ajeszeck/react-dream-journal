import React from 'react'
import Dream from './Dream.js'

class DreamsContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>This is where the dreams go.</h1>
        <Dream />
        <Dream />
        <Dream />
      </div>
    )
  }
}

export default DreamsContainer;
