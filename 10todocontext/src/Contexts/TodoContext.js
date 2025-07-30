import { useContext, createContext } from "react";


export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo mssg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo:(id,todo) => {},
    deletetodo: (id) => {},
    togglecomplete:(id) => {}
})   //todocontext create kraa or export krr diyaa.

export const Usetodo = () => {    
    return useContext(todoContext)  // yaha usetodo naam ka hook bna ke usecontext mein todoContext export krr diya 
}

export const todoprovider = todoContext.Provider   //yaha todoprovider hook mein provider ka access de ke export mr diyaa ki hmee provider na likhna phdee. 