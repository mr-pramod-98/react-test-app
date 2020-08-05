import React, { Component } from 'react';
import './FormButton.css';

class FormButton extends Component {

	getButtonStyle = () => {
		return { 
			borderColor: this.props.type === 'button'? '#D8AC3D' : '#FFFFFF',
			backgroundColor: this.props.type === 'button'? '#D8AC3D' : '#FFFFFF',
			color: this.props.type === 'button'? '#FFFFFF' : '#D8AC3D'
		}
	}

	getButtonTextStyle = () => {
		return {
			color: this.props.type === 'button'? '#FFFFFF' : '#D8AC3D',
			textDecoration: 'none'
		}
	}

  	render() {
		return (
			<button 
				type = { this.props.type }
				onClick = { this.props.onClick }
				style = { this.getButtonStyle() } >
				{ this.props.value }
			</button>
		);
  	}
}

export default FormButton;