import { useContext } from "react";

import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button"
import UserInput from "../components/UserInput";

// get  contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const ExpensePrompt = ({ route }) => {

    const ctx = useContext(ExpenseCtx);
    
    const expenseId = route.params.id;
    const isEditing = expenseId === undefined ? false : true;

    const confirmPress = ({title, amount}) => {
        
        if(isEditing) {
            // ctx.update({
            //     id: expenseId,
            //     title: data.title,

            // });
        } else {
            // console.log('adding new');
            ctx.add({
                id: Math.floor(Math.random()*1000000).toString(),
                title: title,
                amount: amount,
                date: new Date()
            });
            // add new expense.
        }
    }

    const canclePrompt = () => {
        console.log('cancel...');
    }

    const deleteHandler = () => {
        console.log('deleting...');
    }


    return (
        <UserInput 
        canclePrompt={canclePrompt} 
        confirmPress={confirmPress} 
        title="test" date={{}} 
        amount=""
        isEditing={isEditing}
        deleteHandler={deleteHandler}
        />
    );
}

const styles = StyleSheet.create({

});

export default ExpensePrompt;