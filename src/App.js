 import React, { Component } from 'react';
import Map  from './Map';
import NYCSchools from './schools.json'






export default class App extends Component{
    
  state={
    schools:NYCSchools
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

