import React, { Component } from 'react';
import { Carousel } from 'antd';

import '../assets/css/App.css'; 
import '../assets/css/Home.css'; 
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
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div> 
         );
     }
 }
 
 export default Home;