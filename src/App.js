import React from 'react';
import './App.css';
import SearchForm from './Components/SearchForm.js'
import ShowResults from './Components/ShowResults.js'
//put fetch in a function, pass as callback prop to search form component
//take data from fech and put into showResults components (.map)
//results of fetch get added to app state
//need handle submit function
  //get value from user input and pass to callback prop from App.js doSearch function(query)
    //do fetch
    //this.setstate

class App extends React.Component {
  // Callback props are functions, give one callback prop for each of the actions needed to perform
  handleChange = (event) => {
    console.log('handleSubmit called', {event})
    this.setState({
      event
    })
  }

  /*handleDoSearch = (props) => {
    //callback prop
    console.log ('handleDoSearch fired')
    const selected = Object.assign({}, this.state.selected);
  }*/
  
  render () {
    return (
      <div className="App" >
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm 
            //pass in a callback prop
            //accept query argument
              //comes from search form 
            doSearch={this.doSearch} //fetchs to google books
            onChange={this.handleChange}
          />
          <section>
            <ShowResults 
              
              //bookReturns={this.props.bookReturns}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
