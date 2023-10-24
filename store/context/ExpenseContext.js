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
            // setExpenseList((list) => {
            //     return list.filter((listItem) => {
            //         listItem.id !==  id
            //     });
            // });
            console.log('removing...');
        }
    }

    return (
        <ExpenseCtx.Provider value={values}>
            {children}
        </ExpenseCtx.Provider>
    );
}

export default ExpenseContext

