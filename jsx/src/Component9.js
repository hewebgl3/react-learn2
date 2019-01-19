import React, { Component } from 'react';

class Component9 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var array = [
            "北京",
            "上海",
            "广州",
            "深圳"
        ];
 
        return (
            <ul>
               {array.map(
                   function(i){
                       return <li>{i}</li>
                   }
               )}
            </ul>
        );
    }
}

export default Component9
