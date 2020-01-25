import React from 'react'

class SearchForm extends React.Component {
    render () {
        const search = Object.keys(this.props.features).map((selected) => {
            return (
                <>
                    <form>
                        <fieldset>
                            <legend>Search</legend>
                                <div>
                                    <label> Search: </label>
                                    <input 
                                        type="text" 
                                        name="query" 
                                        id="query" 
                                        placeholder="Shakespeare"
                                        onChange={e => this.props.updateFeature(selected)}
                                    />
                                    <button type="submit" >Submit</button>
                                </div>
                        </fieldset>
                    </form>
                </>
            )
        },
        return (
            <form className="search__form">
                <h2>Search for a Book</h2>
                {search}
            </form>
        )
    }
}

export default SearchForm; 