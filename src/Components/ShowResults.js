import React from 'react'

/*export default function ShowResults(books) {
    return (
        <div>
            {this.props.books.map((books, i) =>)}
        </div>
    )
}*/
/* take data from fech and put into showResults components (.map) */

class ShowResults extends React.Component {
    render() {
        const results = this.props.books
            .map((book, i) => 
                <li 
                    key={i}>{book.name}>
                </li>
            );
        return (
            <div className="booklist">
                <h2>Book List:</h2>
                <ul>
                    <li>
                        {results}
                    </li>
                </ul>
            </div>
        )
    }
}

export default ShowResults;