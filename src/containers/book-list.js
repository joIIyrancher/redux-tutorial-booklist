// Container is a react component that has direct connection to the state
// managed by redux

// smart vs dumb component: smart has access to state managed by redux

// We want the most parent component that cares about a particular piece 
// of state to be a container


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item book-detail">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// this function is glue between react and redux
// whenever our application state changes, our component/container will 
// automatically re-render

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList

  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the
// BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all
  // of our reducers

  // dispatch in the arguments is what sends the action to all the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// connect takes a function and a component and produces a container
// export default connect(state => ({books: state.books}))(BookList);

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);