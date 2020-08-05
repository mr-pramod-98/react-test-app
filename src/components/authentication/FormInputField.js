import React, { Component } from 'react';
import './css/FormInputField.css'

class FormInputField extends Component {


  	render() {
		return (
			<input 
				id = { this.props.name }
				type = { this.props.type }
				name = { this.props.name }
				placeholder = { this.props.placeholder }
				onChange = { (e) => { this.props.onDataChange(e.target.name, e.target.value) } }
			/>
		);
  	}
}

export default FormInputField;