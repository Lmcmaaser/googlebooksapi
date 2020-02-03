import React from 'react'
/* take data from fech and put into showResults components (.map) */
class ShowResults extends React.Component {
    render() {
    console.log("ShowResults fired")
        const options = this.props.books.map((book, i) => 
            <li value={book.item} key={i}>
                {book.item}
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
    }
}
  
export default ShowResults;
//results.map(data => <MyComponent aProp={data.something} />);

/*
export default function ShowResults(props) {
    return (
        <div>
            <h2>Book List:</h2>
                    <ul>
                        {this.props.books.map((book, i) => (
                            <li key={book}>
                                {i}
                            </li>
                        ))}
                    </ul>
        </div>
    )
}
*/
/*class ShowResults extends React.Component {
    render() {
        const results = ({books = []}) => (
            return (
                <div className="results">
                    <h2>Book List:</h2>
                    <ul>
                        {this.props.books.map((book, items) => (
                            <li key={book}>
                                {items}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        )
        return (
            <div>
               <h2>Book List:</h2> 
               
            </div>
        )
    }
}

export default ShowResults;*/