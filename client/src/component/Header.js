import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <nav style={{'marginBottom': '15px'}}>
        <div className="nav-wrapper blue darken-2 ">
          <div className="row">
            <div className="col s12">
              <Link
                to={'/'}
                className="left brand-logo"
              >
                Publicar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

