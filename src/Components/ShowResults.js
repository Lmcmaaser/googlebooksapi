import React from 'react'
//pass in results
export default function ShowResults(props) {
    return (
        <div>
            <ul> Book List
                 <li>
                    {this.state.empty || !this.state.books ? (
                        <li>Empty List</li>
                    ) : (
                    <li>{this.state.books}</li>
                     )}
                     
                 </li>   
            </ul>
        </div>
    )
}
