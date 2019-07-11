import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
      businesses: []
    }

    
    this.searchYelp = this.searchYelp.bind(this);


  }


  searchYelp(term, location, sortBy) {
    console.log("inside searchYelp method after clcik go");
   // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.searchYelp(term,location,sortBy).then(businesses => { 
    
      this.setState({businesses  : businesses});
      console.log(businesses);
    })
    ;
   
    //console.log(this.businesses);
  }

  render() {

   

    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses= {this.state.businesses}/>
        {console.log(this.state.businesses)}
        {console.log(this.state.businesses)}
      
       
       
      </div>
    );
  }
}

export default App;

