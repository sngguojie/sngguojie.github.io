import React, { Component } from 'react';
import classNames from 'classnames';

import './styles.css'

class Container extends Component {

  render() {
    const { children, style, color } = this.props;
    const containerClass = classNames("container-colored", {[`container-colored-${color}`]: true, });
    return (
        <div className={containerClass} style={style}>
          { children }
        </div>      
    );
  }
}



export default Container;
