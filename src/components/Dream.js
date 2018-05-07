import React from 'react'

class Dream extends React.Component {
  render() {

    const { desc, type, date } = this.props.details;

    return (
      <div className="dream">
        <div className="top-row">
          <div className="type-date">
            <div className={type}></div>
            <div className="dream-date">{date}</div>
          </div>
          <div className="delete-button-hover">
            <div className="delete-button" onClick={() => this.props.deleteDream(this.props.index)}>&times;</div>
          </div>
        </div>
        <div className="dream-desc" >{desc}</div>
      </div>

    )
  }
}

export default Dream;
