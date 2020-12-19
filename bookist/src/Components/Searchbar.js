import React, {Component} from 'react'

class Searchbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <input className="search-input" onChange={(e) => {this.props.updateInput(e)}} id="inputLabel"></input>
                <button className="search-button" onClick={() => {this.props.filterBooks(this.props.input)}}>Search</button>
                <button className="search-clear-button" onClick={() => {this.props.clearSearch()}}>Clear Search</button>
            </div>
        )
    }
}

export default Searchbar