import React from 'react'
import Dream from './Dream.js'

class DreamsContainer extends React.Component {

  render() {
    return (
      <div className="dream-container">
        <p>This is where the dreams go.</p>
        <Dream />
        <Dream />
        <Dream />
      </div>
    )
  }
}

export default DreamsContainer;
