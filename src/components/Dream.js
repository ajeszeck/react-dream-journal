import React from 'react'
import EditDreamForm from './EditDreamForm'

class Dream extends React.Component {
  handleClick = (event) => {
    console.log(this.props.details);
  }

  render() {
    const { desc, type, date } = this.props.details;

    return (
      <div>
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
          <div className="edit-dream-button-div">
            <p className="edit-dream-button" onClick={this.handleClick}>edit</p>
          </div>
        </div>
        <EditDreamForm details={this.props.details}/>
      </div>
    )
  }
}

export default Dream;
