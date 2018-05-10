import React from 'react'
import styled, { css } from 'react-emotion'

const emotionTest = css({
  alignSelf: "flex-start",
  marginTop: "1rem",
  marginLeft: "0.5rem",
  fontWeight: "bold"
})

class Dream extends React.Component {
  render() {

    const { desc, type, date } = this.props.details;

    return (
      <div className="dream fullDream">
        <div className="top-row">
          <div className="type-date">
            <div className={type}></div>
            <div className="dream-date">{date}</div>
          </div>
          <div className="delete-button-hover">
            <div className="delete-button" onClick={() => this.props.deleteDream(this.props.index)}>&times;</div>
          </div>
        </div>
        <div className={emotionTest} >{desc}</div>
      </div>

    )
  }
}

export default Dream;
