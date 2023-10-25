import { useContext } from "react";

import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button"
import UserInput from "../components/UserInput";

// get  contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const ExpensePrompt = ({ route, navigation }) => {

    const ctx = useContext(ExpenseCtx);
    
    const expenseId = route.params.id;
    const currentTitle = route.params.title;
    const currentAmount = route.params.amount;

    const isEditing = expenseId === undefined ? false : true;

    const confirmPress = ({title, amount}) => {
        
        if(isEditing) {
            // console.log(amount)
            ctx.update({
                id: expenseId,
                title: title,
                amount: amount
            });
            // console.log('editing');
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
        navigation.goBack();
    }

    const deleteHandler = () => {
        ctx.remove(expenseId);
    }


    return (
        <UserInput 
        canclePrompt={canclePrompt} 
        confirmPress={confirmPress} 
        title={currentTitle} 
        amount={currentAmount}
        isEditing={isEditing}
        deleteHandler={deleteHandler}
        />
    );
}

const styles = StyleSheet.create({

});

export default ExpensePrompt;