import React, { Component } from 'react';
import { connect } from 'react-redux';
// adding our action for button click
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)}
          key={book.title} 
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Containres are that link between Redux and React
function mapStateToProps(state) {
 // Whatever gets returned will show up as props 
 // inside of BookList

 // this.props:
 return {
  books: state.books
 };
}

// mapping our imported action with dispatcher
// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all our reducers
  // Binding allows us to call this.props.selectBook
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// redux.connect takes a component and maps it to a container
// Promote BookList from component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);