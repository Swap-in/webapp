import React from 'react'
import './Select.scss'

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Corbatas'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
        <form className='formSearch' onSubmit={this.handleSubmit}>
            <select className='formSearch--Select' value={this.state.value} onChange={this.handleChange}>
              <option value="Zapatos">Zapatos</option>
              <option value="Pantalones">Pantalones</option>
              <option value="Playeras">Playeras</option>
              <option value="Sombreros">Sombreros</option>
            </select>
          {/* <input type="submit" value="Submit" /> */}
        </form>
    );
  }
}
export default Select;