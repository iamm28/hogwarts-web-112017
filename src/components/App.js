import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Hogs from '../porkers_data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchDetails: {
        sortType: "name",
        greasyChecked: false
      }
    }
  }

  render() {
    const newHogs = Hogs.map( (hog) => {
      const oldHog = {hog}
      const newHog = {weight: hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"], medal: hog["highest medal achieved"]}
      return {...hog, ...newHog}
      // return Object.assign({},
      //   {
      //     name: hog.name,
      //     specialty: hog.specialty,
      //     greased: hog.greased,
      //     weight: hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"],
      //     medal: hog["highest medal achieved"]
      //     //image: "link"
      //   }
      // )
    })

    return (
      <div className="App">
          < Nav />
        <HogList hogs={newHogs} searchDetails={this.state.searchDetails}/>
      </div>
    )
  }
}

export default App;
