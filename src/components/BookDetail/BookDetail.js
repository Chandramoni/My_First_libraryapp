import React, { Component} from "react";
import '../../App.css';

const BookDetail = ({selectedBook}) => {
    const {  
        pageCount, volumeInfo
         } = selectedBook;
        const { imageLinks, authors, 
            categories, description, title } = volumeInfo;
return(
    <div className="book-detail">
        <h4>{title}</h4>
     <img src={imageLinks.thumbnail}/>
     <p><span className="caption">Author: </span>
     <span className="detail-text">{authors[0]}</span></p>
   
     <p><span className="caption">Description: </span>
     <span className="detail-text">{description}</span></p>
    <p><span className="caption">Pages: </span>
    <span className="detail-text">{pageCount}</span></p>
    </div>
);
}
export default BookDetail;