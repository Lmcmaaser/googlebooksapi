import React from 'react'
//pass in results
export default function ShowResults(props) {
    return (
        <div>
            <ul>
                 <li>
                     {props.bookReturns}
                 </li>   
            </ul>
        </div>
    )
}
