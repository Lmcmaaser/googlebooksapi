import React from 'react';
import './App.css';
import SearchForm from './Components/SearchForm.js'
import ShowResults from './Components/ShowResults.js'
//put fetch in a function, pass as callback prop to search form component
//take data from fech and put into showResults components (.map)
//results of fetch get added to app state
//need handle submit function


class App extends React.Component {
  // Callback props are functions, give one callback prop for each of the actions needed to perform
  constructor(props) {
    super(props);
    this.state = {
        books: []
    };
  }

  onSubmit = (books) => {
    console.log("onSubmit fired");
    console.log("setting state", books);
    this.setState({books:books}) //putting it in a part of the state, deep copying it
  }
  //books is an object and has a propery called items that's an array
  //onSubmit method that takes in the books data as a parameter and calls setState with that data

  render () {
    return (
      <div className="App" >
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm 
            onSubmit={this.onSubmit} 
            // passes onSubmit to SearchForm.js to be executed
          />
          <section>
            <ShowResults
              books={this.state.books}
            /> 
          </section>
        </main>
      </div>
    )
  }
}

export default App;