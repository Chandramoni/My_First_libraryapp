import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css';
const { API_KEY } = process.env

class BookSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: []
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.props.getInfo(this.state.query);
        }
      } 
    })
  }
  displayResult = () => {
    const { bookList } = this.props;
    return  bookList.map((item)=> {
      return(
        <p className="single-item" 
        onClick={()=>this.props.handleItemClick(item)}>{item.volumeInfo.title}</p>
      )
    })
  }

  render() {
    const { query} = this.state;
    return (
      <form>
        <input
        className="search-input"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <div className="result-list">
        {query !== '' && this.props.bookList.length !== 0 && this.displayResult()}
        </div>        
      </form>
    )
  }
}

export default BookSearch;
