import React from 'react'
import Dream from './Dream.js'

class DreamsContainer extends React.Component {

  render() {
    return (
      <div className="dream-container">
        <p>Past Dreams</p>
        {Object.keys(this.props.dreams).map(key => {
          return (<Dream
            key={key}
            index={key}
            details={this.props.dreams[key]}
            deleteDream={this.props.deleteDream} />)
        })}
      </div>
    )
  }
}

export default DreamsContainer;
