export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  // ActionCreator typically returns 2 values: a type (purpose of the action) 
  // and a payload
  // payload further describes the conditions of the action triggered

  // type is normally a string in caps or a constant
  console.log(book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// we have to make sure that this actioncreator is wired up to redux