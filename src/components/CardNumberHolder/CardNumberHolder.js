import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  }
  render() {
    return (
      <CardNumberInput />
    );
  }
}

export default CardNumberHolder;
