import React, {useState,useEffect} from 'react'
import useFetch from './useFetch';

const DataFetch = () => {

   const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
   const loadingMeassge = <p>Todos is loading</p>
   const errorMessage = <p>{error}</p>

   const todosElement = data && data.map((todo) => {
                return <p key={todo.id}> {todo.title} </p>;
            });
    
  return (
    <div>
       <h1>Todos</h1>
       {error && errorMessage}
       {isLoading && loadingMeassge}
       {todosElement}
    </div>
  )
}

export default DataFetch