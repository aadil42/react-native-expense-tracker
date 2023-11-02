import { createContext, useState, useReducer } from "react";

export const ExpenseCtx = createContext({

});

const expenseReducer = (state, action) => {

    if(action.type  === "ADD") {
        return [action.payload, ...state];
    }

    if(action.type === "UPDATE") {
        let idx = 0;
        let expense = state.filter((expense, index) => {
          if(expense.id === action.payload.id) {
              idx = index; 
              return true;
          }
        });

        expense = expense[0];
        expense.title = action.payload.title;
        expense.amount = action.payload.amount;

        const newCopy = {...expense};
        return [...state.slice(0, idx), newCopy, ...state.slice(idx+1)];
    }
    if(action.type === "DELETE") {
        return state.filter((listItem) => {
            return listItem.id !==  action.id
        });
    }

    return state;
}

const ExpenseContext = ({children}) => {

    // const [expenseList, setExpenseList] = useState([]);
    const [expenseList, dispatch] = useReducer(expenseReducer, []);

    const add = (expense) => {
        dispatch({type: "ADD",payload: expense});
    }

    const remove = (id) => {
        dispatch({type:"DELETE", id: id});
    }

    const update = (expense) => {
        dispatch({type: "UPDATE", payload: expense});
    }

    const values = {
        list: expenseList,
        add: add,
        remove: remove,
        update: update
    }

    // const values = {
    //     list: expenseList,
    //     add: (expense) => {
    //         return setExpenseList((list) => {
    //             return [expense, ...list];
    //         });
    //     },

    //     update: ({id, title, amount}) => {
          
    //       let idx = 0;
    //       let expense = expenseList.filter((expense, index) => {
    //         if(expense.id === id) {
    //             idx = index; 
    //             return true;
    //         }
    //       });
    //       expense = expense[0];
    //       expense.title = title;
    //       expense.amount = amount;
    //       const newCopy = {...expense};

    //       return setExpenseList((list) => {
    //         return [...list.slice(0, idx), newCopy, ...list.slice(idx+1)];
    //       })
    //     },

    //     remove: (id) => {
    //         return setExpenseList((list) => {
    //             return list.filter((listItem) => {
    //                return listItem.id !==  id
    //             });
    //         });
    //     }
    // }

    return (
        <ExpenseCtx.Provider value={values}>
            {children}
        </ExpenseCtx.Provider>
    );
}

export default ExpenseContext

