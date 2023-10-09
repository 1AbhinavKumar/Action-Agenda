import React ,{useState,useEffect} from "react";
import {BrowserRouter ,Route,Link} from 'react-router-dom'
 

let globalId=0 // we have used global id here so that we can filter the element we need to remove on the basis of their unique numbering so that we can use filter.
function App(){

    
    const [task, setTask]= useState("")
    const [todos, setTodos]= useState([]) // we have the array of object not the array of strings. 

    function createtodo(event){
        // console.log (`Task value ${task}`)\
        event.preventDefault()
        setTodos(oldTodos=>{
            // console.log(1)
            setTask('')    // since we have to make input field empty everytime we hit enter at todo
            // return [...oldTodos,task]  // since we have to have to also delete we need something to specify so using global id   
            return [...oldTodos, {todo:task,id :globalId++}]
        })
        // console.log(2)
        // setTask('')    // although set task is working here but we cannot use it here as react don't function line wise like python as in console it implements 2 first before 1 .
    }


    // these code are for using the enter button 
    // function checkforkey(e){
    //     // console.log("Event",e)      // checkforkey event simply helped us in finding the keyvalue assigned for the enterkey
    //     if(e.key === "Enter"){        // we can also do this by e.keyCode===13 
    //         createtodo()
    //     }
    // }

    function deleteitem(itemId){
        setTodos(oldTodos=>oldTodos.filter(item=> item.id!==itemId))
    }

    return <div>
        <h1>To Do App </h1>
        

        {/* <input type= "text"
            onKeyDown={checkforkey}   
            value = {task}  
            onChange={event=>{
            // console.log (event.target.value )
            setTask(event.target.value )   // here event.target is used for the input field .value is used to access the value  then we have used setTask to all which updates the value of the task everytime we click the button.
        }}/>
        
        <button onClick={createtodo}>Todo</button> */}


        {/* another way of doing the thing done above by using the html 'form' tag as form tag has ususal property of submit the form by enter button and then refreshing the site. */}
        
        <form onSubmit={createtodo}>
            <input type="text"
            value={task}
            onChange={event=>{
                setTask(event.target.value)
            }}
            />
            <button id="todo" type="submit">Todo</button>  {/*here button type submit enable us to use Enter button by default */}
            
        </form>

        <ul>
            {todos.map((item)=>{             // here todos.map is mappint out each element in the form of li we could also get the same result if we have used <li> "mehul"</li> in the const array then returned simply {todos}.
                return <div key={item.id}>
                    <li>{item.todo}  ({item.id})</li>
                    <button onClick={()=>deleteitem(item.id)}>Delete</button>  
                    {/* here we have used ()=> deleteitem(item.id) because we want to delete the items on the basis of their id  */}
                    </div>
            })}
        </ul>
         
    </div>
}

export default App