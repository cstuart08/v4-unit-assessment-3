import React, { Component } from 'react'

class Booklist extends Component {
    constructor() {
        super()
    }

    render() {
        let mappedBooks = this.props.books.map((book, index) => {
            return (
                <div className="book">
                    <img onClick={() => {this.props.addToShelf(index)}} className="book-image" src={book.img} />
                    <div>{book.title}</div>
                </div>
            )
        })
        console.log("WIll I see my books on this booklist component?")
        console.log(this.props.books)
    return (
        <div>
            <div className="booklist">{mappedBooks}</div>
        </div>
    
    )
    }
}

export default Booklist