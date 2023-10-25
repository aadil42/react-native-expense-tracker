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

        update: (id, data) => {
          console.log('updating...');
        },

        remove: (id) => {
            console.log('removing...', id);
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

