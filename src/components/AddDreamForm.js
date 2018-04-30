import React from 'react';

class AddFishForm extends React.Component {

  createDream = () => {
    console.log("Dream created.")
  }

  render() {
    return (
      <form className="dream-edit" onSubmit={this.createDream}>
        <textarea name="description" ref={this.descRef} type="text" placeholder="Describe your dream" />
        <select name="good-or-bad" ref={this.statusRef} placeholder="What kind of dream was it?">
          <option value="good">Good</option>
          <option value="bad">Bad</option>
        </select>
        <button type="submit">+ Add Dream</button>
      </form>
    )
  }
}

export default AddFishForm;
