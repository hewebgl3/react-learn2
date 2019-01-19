import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page2 extends Component {
  render() {
    return (
      <div>
                    
          <Link to="/1">页面1</Link>
          页面2
          <Link to="/3">页面3</Link>
      </div>
    );
  }
}

export default Page2;
