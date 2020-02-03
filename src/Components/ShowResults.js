import React from 'react'

class ShowResults extends React.Component {
    render() {
    console.log("ShowResults fired") 
        //item = element in the items array
        //always need a value and a key for .map
        const options = this.props.books.map((book, key) => 
            <li value={book.volumeInfo.title} key={key}>
                {book.volumeInfo.title}
            </li>
        );
        return (
            <div>
                <h2>Book List:</h2>
                <ul> 
                    {options} 
                </ul>
            </div>
        );      
    };
}
// {options} calls the html stuff in the options variable
export default ShowResults;