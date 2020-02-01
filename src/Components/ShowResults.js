import React from 'react'
//pass in results
export default function ShowResults(props) {
    //stateless, and no this
    return (
        <div>
            <ul> Book List
                 <li>
                     {props.books}
                 </li>   
            </ul>
        </div>
    )
}
