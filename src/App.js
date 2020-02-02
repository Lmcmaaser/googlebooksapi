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
 
  handleInput(title) {
    console.log("handleInput fired");
    console.loge(title);
    const books = Object.assign({}, this.props.title);
    // this.setState({query: e.target.value});
    this.setState({books})
  }

  onSubmit = (books) => {
    console.log("onSubmit fired");
    console.log(books);
    this.setState({books})
  }
  //onSubmit method that takes in the books data as a parameter and calls setState with that data

  render () {
    return (
      <div className="App" >
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm 
            handleInput={() => this.handleInput()}
            onSubmit={this.onSubmit}
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
