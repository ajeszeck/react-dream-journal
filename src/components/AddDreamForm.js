import React from 'react';

class AddDreamForm extends React.Component {
  radioButtonOptionChoice = null;

  handleChange = (changeEvent) => {
    this.radioButtonOptionChoice = changeEvent.target.value;
  }

  descRef = React.createRef();
  typeRef = React.createRef();
  dateRef = React.createRef();

  createDream = (event) => {
    event.preventDefault();
    const dream = {
      desc: this.descRef.current.value,
      type: this.radioButtonOptionChoice,
      date: this.dateRef.current.value
    }

    this.props.addDream(dream);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="dream-edit" onSubmit={this.createDream}>
        <p>Add a new dream</p>
        <textarea name="description" className="form-field" ref={this.descRef} type="text" placeholder="Describe your dream" required/>
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
              onChange={this.handleChange}/>
            <div className="check"><div className="inside"></div></div>
            <label for="bad">Bad</label>
          </li>
        </ul>
        <label>Night of: <input className="form-field" type="date" ref={this.dateRef}/></label>
        <button className="submit-button" type="submit">add your dream</button>
      </form>
    )
  }
}

export default AddDreamForm;
