 import React, { Component } from 'react';
import Map  from './Map'






export default class App extends Component{
    
  state={
    schools:[]
  }


  fetchSchools = () =>{
    return fetch('https://data.cityofnewyork.us/resource/wg9x-4ke6.json')
    .then(resp=>resp.json())
    .then(data => this.setState({ schools: data}))
  
  }
  componentDidMount=()=>{
    return this.fetchSchools()
  }
  render(){
    // const schools = this.state.schools.map(school => <div school={school} key={school.system_code}></div>)
  return (
    <div>
      <Map schools={this.state.schools}/>
    </div>
  );
}

}

