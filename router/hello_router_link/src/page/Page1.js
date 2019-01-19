
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page1 extends Component {
  render() {
    return (
      <div>
          页面1
          <Link to="/2">页面2</Link>
          <Link to="/3">页面3</Link>
      </div>
    );
  }
}

export default Page1;
