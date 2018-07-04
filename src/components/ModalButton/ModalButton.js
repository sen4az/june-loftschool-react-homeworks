import React, { Component } from 'react';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  showModal = () => {
    this.setState({isModalShow: true})
  }

  hideModal = () => {
    this.setState({isModalShow: false})
  }

  render() {
    return null;
  }
}

export default ModalButton;
