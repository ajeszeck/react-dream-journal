import React from 'react'

class Dream extends React.Component {
  render() {

    const { desc, type, date } = this.props.details;

    return (
      <div className="dream">
        <div className="desc-date">
          <div className="dream-date">{date}</div>
          <div className={type}>{type}</div>
        </div>
        <div className="delete-button">&times;</div>
        <div className="dream-desc">{desc}</div>
      </div>

    )
  }
}

export default Dream;
