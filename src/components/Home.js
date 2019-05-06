import React, { Component } from 'react';
 class Home extends Component {
     constructor(props) {
         super(props);
         this.state = {
            name:'wzb'
        };
     }
     render() {
         return (
            <div>
                Home页面{this.state.name}
            </div> 
         );
     }
 }
 
 export default Home;