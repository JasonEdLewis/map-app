 import React, { Component } from 'react';
import Map  from './Map';
// import NYCSchools from './schools.json'






export default class App extends Component{
    
  state={
    // schools:NYCSchools
    movies:[]
  }

  limitMovies=(movie)=>{
    const moviesArr = [];
    var x;
    for (x in movie ){
      if(moviesArr.length < 10){
        moviesArr.push(movie[x])
      }
      else{
        return moviesArr
        
      }
      this.setState({movies: moviesArr})
    }
    
  }
    
  

    
  
fetchMovieLocations=async ()=>{
  const resp = await fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json/?');
  const data = await resp.json();
  this.limitMovies(data)
}
  componentDidMount() {
    this.fetchMovieLocations()
  }
  
  render(){
    console.log(this.state)
    // const schools = this.state.schools.map(school => <div school={school} key={school.system_code}></div>)
  return (
    <div>
      <Map movies={this.state.movies}/>
      {/* schools={this.state.schools} */}
    </div>
  );
}

}

