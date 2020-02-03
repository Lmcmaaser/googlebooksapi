import React from 'react'
//monitor state of form and input, when they click the submit, monitor, handle Submit function will call callback prop that is in app j.s and query 
//can have a state
//controlled input form
//contents of form = state
//every state mutation will have an associated handler function

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            title: ''
        };
    }

    //Every time you type a new character, handleInput is called. 
    //It takes in the new value of the input and sets it in the state.
    handleInput(title) {
        console.log("handleInput fired")
        console.log(title) //correctly passes input
        this.setState({title})
    }

    handleSubmit(e) {
        e.preventDefault()
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        const apiKey = 'AIzaSyDaubV3HndRiDb6DYAVllrcUkqwKmAC27Q';
        const url = baseUrl + this.state.title + '&key=' + apiKey;
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data) //displays json data in console
                this.props.onSubmit(data.items); 
                //the json data gets passed to the onSubmit function in App.js
                //accessing parent function to execute
            });
    }

    
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
                                    // handleInput references line 21
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