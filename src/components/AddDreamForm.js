import React from 'react';

class AddFishForm extends React.Component {
  descRef = React.createRef();
  typeRef = React.createRef();

  createDream = (event) => {
    event.preventDefault();

    const dream = {
      desc: this.descRef.current.value,
      type: this.typeRef.current.value
    }

    this.props.addDream(dream);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="dream-edit" onSubmit={this.createDream}>
        <textarea name="description" ref={this.descRef} type="text" placeholder="Describe your dream" required/>
        <select name="good-or-bad" ref={this.typeRef} placeholder="What kind of dream was it?" required>
          <option value="good">Good</option>
          <option value="bad">Bad</option>
        </select>
        <label>When was this dream?<input type="date" /></label>
        <button type="submit">+ Add Dream</button>
      </form>
    )
  }
}

export default AddFishForm;
