import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
  //   this.getchartData();
  // }

  // getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        labels: ['CLASS A', 'CLASS B', 'CLASS C', 'CLASS D'],
        datasets:[
          {
            label:'BELOW 33',
            data:[
              20,
              18,
              22,
              18
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ]
          },
          {
            label:'BETWEEN 33-50',
            data:[
              40,
              22,
              28,
              20
            ],
            backgroundColor:[            
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.6)',              
            ]
          },
          {
            label:'BETWEEN 50-75',
            data:[
              32,
              25,
              20,
              27
            ],
            backgroundColor:[
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ]
          },
          {
            
            label:'ABOVE 75',
            data:[
              18,
              25,
              30,
              35           ],
            backgroundColor:[
              'rgba(153, 102, 255, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to PORTAL</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
