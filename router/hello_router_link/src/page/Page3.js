import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page3 extends Component {
  render() {
    return (
      <div>
                    
          <Link to="/1">页面1</Link>
          <Link to="/2">页面2</Link>
          页面3
      </div>
    );
  }
}

export default Page3;
