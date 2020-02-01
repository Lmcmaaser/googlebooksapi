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
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            title: []
        };
    }

    //Every time you type a new character, handleInput is called. It takes in the new value of the input and sets it in the state.
    // handleInput = (e) => {
    handleInput(title) {
        // this.setState({query: e.target.value});
        this.setState({title})
    }
    //passing in json data

    handleSubmit(e) {
        e.preventDefault()
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        const apiKey = 'AIzaSyDaubV3HndRiDb6DYAVllrcUkqwKmAC27Q';
        const url = baseUrl + this.state.title + '+intitle:keyes&key=' + apiKey;
        console.log(url)
        //https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //this.handleInput(data)({
                console.log(data)
                this.setState({
                    title: data
                    //title: " "
                    //books: data.results[0], put books in apps 
                    //pass in data as an argument
                    //in app.js, take in argument and set new state (this.setstate to be data.results)
                });
            });
    
    }

    // https://www.googleapis.com/books/v1/volumes?q=flowers+intitle:keyes&key=yourAPIKey
    
    render () {
        return (
            <div>
                <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
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
                                    value={this.state.title} 
                                    // onChange={ e => this.handleInput(e.target.value)}
                                    // onChange={this.handleInput.bind(this)}
                                    onChange={e => this.handleInput(e.target.value)}
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