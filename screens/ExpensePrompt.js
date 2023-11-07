import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "../components/Button"
import UserInput from "../components/UserInput";

import { post } from '../utils/http';
import { updateExpense } from "../utils/http";
// get  contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const ExpensePrompt = ({ route, navigation }) => {

    const ctx = useContext(ExpenseCtx);
    
    const expenseId = route.params.id;
    const currentTitle = route.params.title;
    const currentAmount = route.params.amount;
    const currentDate = route.params.date
    // const currentDate = route.params.date;

    const isEditing = expenseId === undefined ? false : true;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Update Expense"  : "Add Expense"
        });
    }, [isEditing, navigation]);


    const updateAlert = () => {
        return Alert.alert("Updated.", "Expense is Updated.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }

    const addAlert = () => {
        return Alert.alert("Added.", "Expense is Added.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }

    const deleteAlert = () => {
        return Alert.alert("Deleted.", "Expense is Deleted.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }

    const confirmPress = ({title, amount}) => {
        
        if(isEditing) {
            const data = {
                id: expenseId,
                title: title,
                amount: amount,
            };
            const remoteDate = {
                title: title,
                amount: amount,
                date: currentDate
            }
            ctx.update(data);
            updateExpense(expenseId, remoteDate);
            updateAlert();
        } else {
            const data = {
                title: title,
                amount: amount,
                date: new Date()
            }
            ctx.add(data);
            post(data);
            addAlert();
        }
    }

    const canclePrompt = () => {
        navigation.goBack();
    }

    const deleteHandler = () => {
        ctx.remove(expenseId);
        deleteAlert();
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