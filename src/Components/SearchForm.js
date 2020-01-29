import React from 'react'
//monitor state of form and input, when they click the submit, monitor, handle Submit function will call callback prop that is in app j.s and query 
//can have a state
//controlled input form
//contents of form = state
//get doSearch props
//every state mutation will have an associated handler function

//pass query from form to App.js then back to fetch, then back to App. js, then to show results, then back to app
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            empty: true,
            books: null
        };
    }
  
    // handleChange updates the React state
    //Every time you type a new character, handleChange is called. It takes in the new value of the input and sets it in the state.
    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    doSearch() {
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        const apiKey = 'AIzaSyDaubV3HndRiDb6DYAVllrcUkqwKmAC27Q';
        const url = baseUrl + this.query + 'intitle:keyes&key=' + apiKey;
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    books: data.results[0]
                });
            });
    }

    // https://www.googleapis.com/books/v1/volumes?q=flowers+intitle:keyes&key=yourAPIKey
    
    render () {
        return (
            <div>
                <form className="search__form" onSubmit={this.doSearch}>
                    <h2>Search for a Book</h2>
                    <fieldset>
                        <legend>Search</legend>
                            <div>
                                <label> Search: </label>
                                <input 
                                    type="text" 
                                    name="query" 
                                    id="query" 
                                    placeholder="Shakespeare"
                                    value={this.state.query} 
                                    onChange={this.handleChange.bind(this)}
                                />
                                <button type="submit">Submit</button>
                            </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SearchForm; 