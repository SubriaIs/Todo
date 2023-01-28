import React from 'react';

const ToDoListItem = props => {
    return(
      <>
        <p>{props.id}. {props.name}. {props.description} </p>
      </>
    )
  };
  export default ToDoListItem;