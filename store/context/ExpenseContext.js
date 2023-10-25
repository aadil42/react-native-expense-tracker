import { createContext, useState } from "react";

export const ExpenseCtx = createContext({

});

const ExpenseContext = ({children}) => {

    const [expenseList, setExpenseList] = useState([]);

    const values = {
        list: expenseList,
        add: (expense) => {
            return setExpenseList((list) => {
                return [expense, ...list];
            });
        },

        update: ({id, title, amount}) => {
          
          let idx = 0;
          let expense = expenseList.filter((expense, index) => {
            if(expense.id === id) {
                idx = index; 
                return true;
            }
          });
          expense = expense[0];
          expense.title = title;
          expense.amount = amount;
          const newCopy = {...expense};

          return setExpenseList((list) => {
            return [...list.slice(0, idx), newCopy, ...list.slice(idx+1)];
          })
        },

        remove: (id) => {
            return setExpenseList((list) => {
                return list.filter((listItem) => {
                   return listItem.id !==  id
                });
            });
        }
    }

    return (
        <ExpenseCtx.Provider value={values}>
            {children}
        </ExpenseCtx.Provider>
    );
}

export default ExpenseContext

