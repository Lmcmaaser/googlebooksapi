import React from 'react';
import './App.css';
import SearchForm from './Components/SearchForm.js'
import ShowResults from './Components/ShowResults.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Results: [],
    };
  }

  // Example: GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  // GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
  componentDidMount() {
    const baseUrl = 'https://www.googleapis.com/books/';
    const apiKey = 'AIzaSyDaubV3HndRiDb6DYAVllrcUkqwKmAC27Q';
    // const query = //how do I get my search form query here?
    const url = baseUrl + '?q=' + query + '&' + 'key=' + apiKey;

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const Results = Object.keys(data)
          .map(key => data[key].item[0]);
          this.setState({
            Results
          });
        });
      }
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  /*updateSearch = (q) => {
    console.log('updateSearch fired');
    console.log(q);
    this.setState({
        q
    })
  }*/

  render () {
    return (
      <div className="App" >
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm 
            selected={this.state.selected}

          />
          <section>
            <ShowResults 
              results={this.props.results}
            />
          </section>
        </main>

      </div>
    )
  }
}

export default App;
