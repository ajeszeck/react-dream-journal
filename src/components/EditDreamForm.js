import React from 'react';

class EditDreamForm extends React.Component {
  handleChange = (event) => {
    console.log(event);
  }

  render() {
    const { desc, type, date } = this.props.details;

    return (
      <form className="dream-edit-form" onSubmit={this.createDream}>
        <textarea name="description" className="form-field" ref={this.descRef} type="text" value={desc} onChange={this.handleChange} placeholder="Describe your dream" required/>
        <ul className="radio-button-div">
          <p>How was the dream?</p>
          <li>
            <input
              type="radio"
              id="good"
              name="type"
              value="Good"
              className="good-radio"
              ref={this.typeRef}
              checked={type === "Good"}
              onChange={this.handleChange}/>
              <div className="check"><div className="inside"></div></div>
              <label for="good">Good</label>
          </li>
          <li>
            <input
              type="radio"
              id="neutral"
              name="type"
              value="Neutral"
              className="neutral-radio"
              ref={this.typeRef}
              checked={type === "Neutral"}
              onChange={this.handleChange} />
              <div className="check"><div className="inside"></div></div>
            <label for="neutral">Neutral</label>
            </li>
          <li>
            <input
              type="radio"
              id="bad"
              name="type"
              value="Bad"
              className="bad-radio"
              ref={this.typeRef}
              checked={type === "Bad"}
              onChange={this.handleChange}/>
            <div className="check"><div className="inside"></div></div>
            <label for="bad">Bad</label>
          </li>
        </ul>
        <label>Night of: <input className="form-field" type="date" ref={this.dateRef} value={date} onChange={this.handleChange}/></label>
        <button className="submit-button">done</button>
      </form>
    )
  }
}

export default EditDreamForm;
