import React from 'react';
import "./Header.css"

class Header extends React.Component {
  render() {

    // console.log(this.props)
    const { title } = this.props
    return <header className="header">{title}</header>
    
  }
}

export default Header;