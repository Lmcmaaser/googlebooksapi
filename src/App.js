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
  handleChange = (data) => {
    console.log('handleChange called', {data})
    this.setState({
      title:data.results
      
    })
  } 
  
  render () {
    return (
      <div className="App" >
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm 
            handleChange={() => this.handleChange()}
          />
          <section>
            <ShowResults 
              books={this.props.books}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
