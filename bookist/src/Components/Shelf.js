import React, { Component } from 'react'

class Shelf extends Component {
    constructor() {
        super()
    }

    render() {
        let bookTitles = this.props.shelf.map((book) => {
        return <p>{book.title}</p>
        })
    return (
        <div>
            <h2>Your Shelf</h2>
            <button onClick={this.props.clearShelf}>clear shelf</button>
            <div className="shelf">{bookTitles}</div>
        </div>
    )
    }
}

export default Shelf