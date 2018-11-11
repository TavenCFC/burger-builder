import Fetch from 'isomorphic-fetch';

export function testRequest() {
  return dispatch => {

    return Fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(data => {
        dispatch({
          data,
          type: 'ADD_TODO_SUCCESS'
        });
      })
  }
}
