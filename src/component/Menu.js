import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Menu extends Component {
    render() {
      return (
        <div className={this.props.menuStatus} id='menu'>
            <ul>
                <li>
                    <Link to="">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Cart
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/nethreen" target='_blank'>
                        My GitHub Profile
                    </a>
                </li>
            </ul>
        </div>
      )
    }
  }

  export default Menu;