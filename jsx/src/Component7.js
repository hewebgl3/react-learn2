import React, { Component } from 'react';

class Component7 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var array = [
            <b>你好</b>,
            " ",
            <span >同学</span>,
            '!'
        ];
 
        return (
            <div>
               {array}
            </div>
        );
    }
}

export default Component7
