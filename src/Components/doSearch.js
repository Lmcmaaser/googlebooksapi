import React from 'react'

export default function doSearch(props) {
    event.preventDefault();
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const apiKey = 'AIzaSyDaubV3HndRiDb6DYAVllrcUkqwKmAC27Q';
    const url = baseUrl + this.query + 'intitle:keyes&key=' + apiKey;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bookResults = Object.keys(data)
                .map(key => data[key].item[0]);
            this.setState({
                bookResults
            });
        });
    
}