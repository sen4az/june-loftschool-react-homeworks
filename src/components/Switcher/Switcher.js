import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }
  render() {
    return(
      <div className='component-list__name' data-id></div>
    )
  }
}

export default Switcher;
