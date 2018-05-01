import React from 'react'

class Dream extends React.Component {
  render() {
    const { desc, type } = this.props.details;

    return (
      <div className="dream">
        <div className="dream-desc">{desc}</div>
        <div className="dream-status" className={type}>{type}</div>
      </div>
    )
  }
}

export default Dream;
