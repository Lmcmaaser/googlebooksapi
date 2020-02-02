import React from 'react'
/* take data from fech and put into showResults components (.map) */
class ShowResults extends React.Component {
    render() {
      const options = this
            .props
            .books
            .map(
              (book, i) => <li value={book.name} key={i}>{book.name}</li>
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