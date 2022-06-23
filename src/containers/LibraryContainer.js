import React, { Component} from "react";
import BookSearch from '../components/BookSearch/BookSearch';
import Criterias from "../components/Criterias";
import BookDetail from "../components/BookDetail/BookDetail";
import { connect } from "react-redux";
import {debounce} from '../utils/LibraryHelper';
import {getDrugInfo} from '../actions/LibraryAction.js'
 

class LibraryContainer extends Component {
    constructor(props) {
        super(props);
        this.state ={ 
            selectedBook : {}
        }
        this.getInfo = this.getInfo.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (item) => {
this.setState({selectedBook:item});
    }

    getInfo = (query) =>{
        debounce(
            this.props.getDrugInfo(query)
        , 1000);
    }
    render(){
        return(
            <div className="library-container">
                <div className="library-left-section">
                <Criterias/>
                <BookSearch 
                getInfo={this.getInfo} 
                bookList={this.props.bookList}
                handleItemClick={this.handleItemClick}
                />
                </div>
               <div className="library-right-section">
                {(Object.keys(this.state.selectedBook).length !== 0 )
                && <BookDetail selectedBook={this.state.selectedBook}/>}
               </div>
            </div>
          
        )
    }
}

function mapStateToProps (state) {
    const { bookList } = state.libraryReducer || {};
    return{
        bookList
    }
}
function mapDispatchToProps (dispatch) {
    return {
        getDrugInfo: query => dispatch(getDrugInfo(query))
    }
}
     
   
export default connect(mapStateToProps, mapDispatchToProps)(LibraryContainer);