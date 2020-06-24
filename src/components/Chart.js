import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
          maintainAspectRatio: true,
            // animation: {
            //   onProgress: function(animation) {
            //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            //   }
            // },
            title:{
              display:this.props.displayTitle,
              text:'Result for Session 2019-20 ',
              fontSize:20
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            
          }}
        />

        
      </div>
    )
  }
}

export default Chart;
